# Exploring the world 
- read about monolithic services and miscroservices architecture
- now we use to fetch dynamic data from api (backend) instead of hard coded data
- there are two ways to fetch
  1- loads => API => Render
  2- loads => Render => API => Re-render

  # monolithic services
  api code , ui code, auth code, db connectivity code, notification 
  even if we want a single change - build , deploy the whole project

  # microservices architecture  
  - different services for different jobs
  - all the small services comes and make a big app
  - this is known as seperation of concerns
  - follows single responsibilty principle
  - all the teams work independent on their respective repositories and their own deployment cycle
  - how do these serivices interact each other??
  - ex: the ui service talk to backend to fetch data, backend needs to talk to db
  - the namaste react we are building is a ui micro service written in react
  - in monolithic all things written in one langauge ex: java but in microservice ui written in react, backend written in java, db written in python, all depends on usecase
  - how these service is connected??
  - our ui service deployed on port 1234 similarly all services run on own specific ports
  - :1234 - ui service   (/)
  - :8000 - backend port   (/api)
  - :1000 - sms    (/sms)
  - all these services map to domain name
  - suppose ui make a connect to backend they will make a call to /api or call this 8000 port
  - so how this react appication talk to different microservices , how will react app backend api call and fetch the data 

  # two approches how ui fetch the data from backend
  - when we can make api call ??
  # 1
  - as soon as our page loads make an api call fetch the data, wait for the data, as we get data render to UI, suppose api call takes 500ms our page wait for 500ms then after renders the UI
  # 2
  - as soon as page loads, render the UI after that we will make an api call, as soon as we get data we will populate or re render the app with the data
  - In react we will be using the second approch you can use skeleton on loading
  - why??
  - this gives you better UX


# useEffect Hook
- normal js function takes two arguments, first arg is arrow function i,e call back fn and the second arg is Dependency array
- 1 - arrow function 
- 1 - dependency array
- when will this useEffect callback function be called??
- this callback function be called after component renders
- as soon as render cycle of component completed it will call the useEffect callback function
- so it means want to do something after rendering the component ,write inside useEffect
- need to check useEffect rendering after component render use debugger in source

# How to fetch data
- use a method, a function fetch() , given to us by browsers js engine has
- fetch will return a promise
- how we resolve a promise??
- either we use traditional way of .then .catch or you can use newer approch of async await
- async/await recommended in industry
- CORS - our browsers dont allow to call apis from one origin other origin , if origin mismatch browser blocks the api call (watch video on CORS)
- how to get rid of this cors issue??
- cors chorme extension, you will find chrome ext allow to bypass this cors
- need to add loading state before data is being fetched use shimmer UI
- shimmer ui resembles the page actual ui , even youtube , swiggy follows shrimmer ui

# why we use useState for local variable 
- is normal variable work if no why??
- what is the super power does useState variable have not local variable?
- because on changing local variable it does not render the component so ui does not reflect changes 
- if you want to render component use useState ; setNumber is function which changes the variable and re-render the component as well
- it only re renders the whole component using virtual dom
- how can be constant variable gets updated by new value ,againt the js principles ??
- because rendering whole component this cont variable is the new variable than before 
- as soon as you call the setBtnNameReact it will update the btnNameReact value reference and then it render the header component once again it will find the div b/w  older version and newer version that only the button getting update there is no other changes,
this is happening because of diff algorithm , reconciliation process  

- whenever state variables update , react triggers a reconciliation cycle(re-render the conponent)
- why react fast ?
- react has the react fibre(react new reconciliation algorithms) which finds the difference between the two virtula dom and only update that change

# CORS issue (6.2)
- for our laptop we use chrome extension i.e. Cors plugin
- but somebody using that website they might not having cors plugin 
- but for production so that other dont get stuck in cors issue we use a website CorsProxy.io just paste that corsproxy.io link before the api string