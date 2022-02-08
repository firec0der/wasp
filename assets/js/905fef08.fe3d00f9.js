(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7168],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),y=o,k=c["".concat(p,".").concat(y)]||c[y]||d[y]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6422:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={title:"Deploying"},p=void 0,s={unversionedId:"deploying",id:"deploying",isDocsHomePage:!1,title:"Deploying",description:"While you can deploy Wasp projects, Wasp is still in alpha and not yet production-ready.",source:"@site/docs/deploying.md",sourceDirName:".",slug:"/deploying",permalink:"/docs/deploying",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/deploying.md",tags:[],version:"current",frontMatter:{title:"Deploying"},sidebar:"docs",previous:{title:"CLI Reference",permalink:"/docs/cli"},next:{title:"Examples",permalink:"/docs/examples"}},u=[{value:"Env vars",id:"env-vars",children:[]},{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[{value:"Set up a Heroku app (only once per Wasp app)",id:"set-up-a-heroku-app-only-once-per-wasp-app",children:[]},{value:"Deploy to a Heroku app",id:"deploy-to-a-heroku-app",children:[]}]},{value:"Deploying to Netlify",id:"deploying-to-netlify",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While you can deploy Wasp projects, Wasp is still in alpha and not yet production-ready."),(0,r.kt)("p",{parentName:"div"},"It might have critical security issues or other types of issues, and therefore we don't recommend deploying to production yet."))),(0,r.kt)("p",null,'Right now, deploying of Wasp project is done by generating the code and then deploying generated code "manually", as explained below.'),(0,r.kt)("p",null,"In the future, the plan is to have Wasp take care of it completely: you would declaratively define your deployment in .wasp and then just call ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp deploy")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/169"},"github issue"),")."),(0,r.kt)("h1",{id:"generating-deployable-code"},"Generating deployable code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wasp build\n")),(0,r.kt)("p",null,"generates deployable code for the whole app in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/")," directory. Next, we will deploy this code."),(0,r.kt)("p",null,"NOTE: You will not be able to build the app if you are using SQLite as a database (which is a default database) -> you will have to ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#migrating-from-sqlite-to-postgresql"},"switch to PostgreSQL"),"."),(0,r.kt)("h1",{id:"deploying-api-server-backend"},"Deploying API server (backend)"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/"),", there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," describing an image for building the server."),(0,r.kt)("p",null,"To run server in production, deploy this docker image to your favorite hosting provider, ensure that env vars are correctly set, and that is it."),(0,r.kt)("p",null,"Below we will explain the required env vars and also provide detailed instructions for deploying to Heroku."),(0,r.kt)("h2",{id:"env-vars"},"Env vars"),(0,r.kt)("p",null,"Server uses following environment variables, so you need to ensure they are set on your hosting provider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT")," -> number of port at which it will listen for requests (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"3001"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," -> url to the Postgres database that it should use (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"postgresql://mydbuser:mypass@localhost:5432/nameofmydb"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JWT_SECRET")," -> you need this if you are using Wasp's ",(0,r.kt)("inlineCode",{parentName:"li"},"auth")," feature. Set it to a random string (password), at least 32 characters long.")),(0,r.kt)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),(0,r.kt)("p",null,"Heroku is completely free under certain limits, so it is ideal for getting started with deploying a Wasp app.\nYou will need Heroku account, ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku")," CLI and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," CLI installed to follow these instructions."),(0,r.kt)("p",null,"Make sure you are logged in with ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku")," CLI. You can check if you are logged in with ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku whoami"),", and if you are not, you can log in with ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku login"),"."),(0,r.kt)("h3",{id:"set-up-a-heroku-app-only-once-per-wasp-app"},"Set up a Heroku app (only once per Wasp app)"),(0,r.kt)("p",null,"Unless you already have a heroku app that you want to deploy to, let's create a new Heroku app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku create <app-name>\n")),(0,r.kt)("p",null,"Unless you have external Postgres database that you want to use, let's create new database on Heroku and attach it to our app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku addons:create --app <app-name> heroku-postgresql:hobby-dev\n")),(0,r.kt)("p",null,"Heroku will also set ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," env var for us at this point. If you are using external database, you will have to set it yourself."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," env var will also be provided by Heroku, so the only thing left is to set ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," env var:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku config:set --app <app-name> JWT_SECRET=<random_string_at_least_32_characters_long>\n")),(0,r.kt)("h3",{id:"deploy-to-a-heroku-app"},"Deploy to a Heroku app"),(0,r.kt)("p",null,"Position yourself in ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/")," directory (reminder: which you created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp build")," previously):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd .wasp/build\n")),(0,r.kt)("p",null,"assuming you were at the root of your Wasp project at that moment."),(0,r.kt)("p",null,"Log in to Heroku Container Registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku container:login\n")),(0,r.kt)("p",null,"Build the docker image and push it to Heroku:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku container:push --app <app-name> web\n")),(0,r.kt)("p",null,"App is still not deployed at this point.\nThis step might take some time, especially the very first time, since there are no cached docker layers."),(0,r.kt)("p",null,"Deploy the pushed image and restart the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku container:release --app <app-name> web\n")),(0,r.kt)("p",null,"This is it, backend is deployed at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<app-name>.herokuapp.com"),"!"),(0,r.kt)("p",null,"Additionally, you can check out the logs with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku logs --tail --app <app-name>\n")),(0,r.kt)("h1",{id:"deploying-web-client-frontend"},"Deploying web client (frontend)"),(0,r.kt)("p",null,"Position yourself in ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app")," directory (reminder: which you created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp build")," previously):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd .wasp/build/web-app\n")),(0,r.kt)("p",null,"assuming you were at the root of your Wasp project at that moment."),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install && REACT_APP_API_URL=<url_to_wasp_backend> npm run build\n")),(0,r.kt)("p",null,"where <url_to_wasp_backend> is url of the wasp backend that you previously deployed, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://wasp-test.herokuapp.com"),"."),(0,r.kt)("p",null,"This will create ",(0,r.kt)("inlineCode",{parentName:"p"},"build/")," directory, which you can deploy to any static hosting provider.\nCheck instructions below for deploying to Netlify."),(0,r.kt)("h2",{id:"deploying-to-netlify"},"Deploying to Netlify"),(0,r.kt)("p",null,"Netlify is a static hosting solution that is free for many use cases.\nYou will need Netlify account and ",(0,r.kt)("inlineCode",{parentName:"p"},"netlify")," CLI installed to follow these instructions."),(0,r.kt)("p",null,"Make sure you are logged in with ",(0,r.kt)("inlineCode",{parentName:"p"},"netlify")," CLI. You can check if you are logged in with ",(0,r.kt)("inlineCode",{parentName:"p"},"netlify status"),", and if you are not, you can log in with ",(0,r.kt)("inlineCode",{parentName:"p"},"netlify login"),"."),(0,r.kt)("p",null,"While positioned in ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app/")," directory, and after you have created ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app/build/")," directory as per instructions above, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"netlify deploy\n")),(0,r.kt)("p",null,"and that is it!"))}c.isMDXComponent=!0}}]);