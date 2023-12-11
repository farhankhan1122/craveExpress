<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
    </div>


    <!-- root.render put something inside root -->
    <!-- but suppose already something existed here -->
    <div id="root2">
        <h1>i am here</h1>
        <!-- this code is replaced not appended -->
    </div>
    <!-- ans: this "i am here is" replaced by parent tag that we rendering-->
    <!-- because firstly browser reads html it will print " i am here" then go to scripts and load react then load react dom ibnto our app  -->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./app-eps-3.js"></script>

    <!-- the most constly operation is dom manipulation -->
    <!-- putting some node inside dom and removing some nodes from dom  -->
    <!-- all frameworks and libraries are trying to optimize it -->
    <!-- react also comes with the philosophy that whenever you need to do anything on webpage do it using javascript  -->
</body>
</html>

- react can be only applied on small portion of our page so we called library
- like react can only applied to header only, footer only ,sidenav only




# EPISODE-2

# git
- git init - initialize your git repository
- want to change master branch to main branch use  git branch -M main
- local git does not know what is remote so you need to configure "git remote add origin git@github.com:xyz/abc.git"  , this step is used only once
- now push to code to remote using "git push origin main"

<!-- assignment -->
<!-- git ssh -->
<!-- cross origin -->


- to make your app ready to go in production you need to do lot of processing in your local like "optimize images,remove console ,remove comments"
so that it should minified bundle 
- you need to do basically  -BUNDELLING,CODE SPLITTING,CHUNKING ,IMAGE OPTIMIZE
- you to need to do lot of processing in to your local before pushing it to the production

# NPM
- npm does not stands for node package manager it is just a universal package manager
- standard repository for all the packages
- all the libraries and utilities comes from npm
- npm init utitlitly will walk you through creating package.json file
- test case : jest 
- package.json is the configuration for npm
- this packages is also known as dependencies
- lets starts installing dependencies  . The most imposrtant package in our project : BUNDELLER
- What is bundller: our whole code needs to bundle together,minified,cached,cpmpressed,cleaned before it sent for preduction
- what is webpack,parcel,vite  : these are bundler
- bundler: bundles your project , it packages your app
- when we use create react app , uses webpack bundler and babel behind the scene
- In our project we are using PARCEL (we can also use webpack or vite )
- parcel is one of the best library we are going to use in our app , it will ignite our app , 
- parcel comes as a node package we will install that package , now we have npm so we install dependencies
- command npm install -D parcel
- why we give -D (flag) 
- -D we use parcel as a dev dependencies
- there are two types of dependecies or packages we install 
- 1- Dev dependecies : required in development phase
- 2- Normal dependencies : used in production also 
- parcel is a bundler ,we use in development phase so we will install parcel as a dev dependencies
- parcel gives muscle to our app and it is a beast after installing parcel NODE_MODULELS and package.lock.json files updated
- package.lock = keeps the approx version and it is configuration of npm it keeps the track of what version of that version is installed into out system 
- package.lock.json = locks the version and keeps the  track keeps the EXACT version of that package


# NODE_MODULES
- node_modules fetches all the transitive dependencies into our system 
- kind of a database where all out packages exist
- our project needs parcel dependencies but parcel having its own dependencies
    and  those dependencies have their own dependencies this is known as "TRANSITIVE DEPENDENCIES"
- which are in the node_modules
- in our project how many package.json do we have
- every dependencies have their own package.json



# .gitignore file
- the size of node_modules is huge we cant put this on git it is useless 
- so any file you dont want to put onto git just put it inside .gitignore file
/node_module
- package.json and package.lock.json is imp to put onto git and using this we can 
- recreate the node_module (npm install)



- we got parcel as a dev dependencies in  package.json because package.json keep track of all the packages  and dependencies 
- "parcel": ^2.8.3
- ^ = Caret : suppose a new minor version of parcel is released 2.8.4 what will happen if you put this caret - before version
- parcel will automatically upgraded to 2.8.4
- 2.8.4 = is minor upgrade
- 3.8.3 = is a major upgrade
- ~ Tilde = if you put tilde suppose 3.0.0 major released so tilda upgrade the major version automatically
- its ok to upgrade the minor version and not major version  

# RECAP HALF EPISODE 2 PART 1
- GIT INIT (package.json created)(maintain versions of dep it can Caret or Tilde)
  (package.lock.json)(all the transitive or all the dep that our proj will ever need)
- setup remote repository
- install npm
- if your delete node_modules you can recreate node_modules using npm install
   




# EPISODE 2 PART 2
- Command npx parcel index.html (the source file)
- now we basically building our app using parcel
- building development build and host it to the localhost:1234

- parcel has hosted with a port localhost:1234
- Q-what's this command : npm parcel index.html
- A- npx just like npm 
- npm means we are calling the command of npm or if you want to install the packages  then use npm
- To execute the package then we use npx
- npx means executing a package
- for start - npx parcel index.html (this will create a dev build)  -> npm run start
- for build - npx parcel build index.html   -> npm run build
- create scripts for start and build        
- "start": "parcel index.html" 
- "build": "parcel build index.html"


# dist
- after bulding only 3 files are bundled inside dist folder 
- after build build goes into the dist folder
- dist - contains development files - automatically generated
- hosted files coming from dist 
- when exeute parcel npx parcel index.html it generated of your development build of your project it hosted on 1234 when it puts it up inside 
  dist folder

# browserslist
- www.browserslist.dev
- npm package
- lets make app campatible with older version of browser - you choose browsers list
- configure in package.json - configure means definitely works on configured browsers
- if you configure every bowsers then it put some axtra code 
- checkout query composition in www.browserslist.dev - check browser coverage in a country - statistics
- country or mobile specific



- 1- (first way)we learn first way to inject REACT is using CDN links and this is not the good way toinject react(not a preferred way to bring react or react dom in our project)
because its the costly operation (we dont make another network to get react i.e cdn links) because wealready have node_modules
- https://unpkg.com/react@18/umd/react.development.js
- it fetches from unpkg and another thing is react18 is there tommorow some other comes
- what happen is we need to keep changing url this is not the good way .


- 2-(second way)NOW we INSTALL REACT as a package to our code
- use command [npm install react]
- note we not giving -D flag here as we give in npx -D parcel
- why??
- because need react as normal dependency not a dev dependency
- after installing react we got react dependencies in package.json ,package.lock.json and also in node_modules

- INSTALL REACT DOM also
- npm install react-dom 
- npm i react-dom (is a short form)

- after installing react and react-dom in node_modules so react code need to import from node_modules 
- import React from 'react'
- 'react' refers to react inside the node_modules

- need to add type="module" in script file to tell that it is not the normal js file'

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (changes dom without refreshing)
- how parcel is doing HMR - parcel using file watching algorithm (written in c++)
- parcel also doing caching inside(.parcel-cache)
- caching - Faster Build
- Image optimization
- Minification (for production)
- Bundling in the file
- Compressing the file
- Consistent Hashing (read it)
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics - Parcel also give beautiful error display view
- Error Handing
- *Tree Shaking Algorithm - remove unused code for you
- Different Build Dev and Production Bundles (prod build takes a little more time)- less optimization on dev than prod
- https - we dont need https on development but if we want to test something which only works on SSL(HTTPS)
- READ PARCEL DOCUMENTATION



    
