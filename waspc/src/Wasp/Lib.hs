module Wasp.Lib
  ( compile,
    Generator.setup,
    Generator.start,
    ProjectRootDir,
    findWaspFile,
  )
where

import Data.List (find, isSuffixOf)
import StrongPath (Abs, Dir, File', Path', relfile)
import qualified StrongPath as SP
import System.Directory (doesDirectoryExist, doesFileExist)
import qualified Wasp.Analyzer as Analyzer
import Wasp.Analyzer.AnalyzeError (getErrorMessageAndCtx)
import qualified Wasp.AppSpec as AS
import Wasp.Common (DbMigrationsDir, WaspProjectDir, dbMigrationsDirInWaspProjectDir)
import Wasp.CompileOptions (CompileOptions)
import qualified Wasp.CompileOptions as CompileOptions
import Wasp.Error (showCompilerErrorForTerminal)
import qualified Wasp.ExternalCode as ExternalCode
import qualified Wasp.Generator as Generator
import Wasp.Generator.Common (ProjectRootDir)
import qualified Wasp.Util.IO as Util.IO

type CompileError = String

type CompileWarning = String

compile ::
  Path' Abs (Dir WaspProjectDir) ->
  Path' Abs (Dir ProjectRootDir) ->
  CompileOptions ->
  IO ([CompileWarning], [CompileError])
compile waspDir outDir options = do
  maybeWaspFilePath <- findWaspFile waspDir
  case maybeWaspFilePath of
    Nothing -> return ([], ["Couldn't find a single *.wasp file."])
    Just waspFilePath -> do
      waspFileContent <- readFile (SP.fromAbsFile waspFilePath)
      case Analyzer.analyze waspFileContent of
        Left analyzeError ->
          return
            ( [],
              [ showCompilerErrorForTerminal
                  (waspFilePath, waspFileContent)
                  (getErrorMessageAndCtx analyzeError)
              ]
            )
        Right decls -> do
          externalCodeFiles <-
            ExternalCode.readFiles (CompileOptions.externalCodeDirPath options)
          maybeDotEnvFile <- findDotEnvFile waspDir
          maybeMigrationsDir <- findMigrationsDir waspDir
          let appSpec =
                AS.AppSpec
                  { AS.decls = decls,
                    AS.externalCodeFiles = externalCodeFiles,
                    AS.externalCodeDirPath = CompileOptions.externalCodeDirPath options,
                    AS.migrationsDir = maybeMigrationsDir,
                    AS.dotEnvFile = maybeDotEnvFile,
                    AS.isBuild = CompileOptions.isBuild options
                  }
          (generatorWarnings, generatorErrors) <- Generator.writeWebAppCode appSpec outDir
          return (map show generatorWarnings, map show generatorErrors)

findWaspFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findWaspFile waspDir = do
  files <- fst <$> Util.IO.listDirectory waspDir
  return $ (waspDir SP.</>) <$> find isWaspFile files
  where
    isWaspFile path =
      ".wasp" `isSuffixOf` SP.toFilePath path
        && (length (SP.toFilePath path) > length (".wasp" :: String))

findDotEnvFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findDotEnvFile waspDir = do
  let dotEnvAbsPath = waspDir SP.</> [relfile|.env|]
  dotEnvExists <- doesFileExist (SP.toFilePath dotEnvAbsPath)
  return $ if dotEnvExists then Just dotEnvAbsPath else Nothing

findMigrationsDir ::
  Path' Abs (Dir WaspProjectDir) ->
  IO (Maybe (Path' Abs (Dir DbMigrationsDir)))
findMigrationsDir waspDir = do
  let migrationsAbsPath = waspDir SP.</> dbMigrationsDirInWaspProjectDir
  migrationsExists <- doesDirectoryExist $ SP.fromAbsDir migrationsAbsPath
  return $ if migrationsExists then Just migrationsAbsPath else Nothing