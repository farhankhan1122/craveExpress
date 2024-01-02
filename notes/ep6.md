# Exploring the world 
- read about monolithic services and miscroservices architecture
- now we use to fetch dynamic data from api (backend) instead of hard coded data
- there are two ways to fetch
  1- loads => API => Render
  2- loads => Render => API => Re-render

# useEffect Hook
- normal js function takes two arguments, first arg is arrow function i,e call back fn and the second arg is Dependency array
- 1 - arrow function 
- 1 - dependency array
- when will this useEffect callback function be called??
- this callback function be called after component renders
- as soon as render cycle of component completed it will call the useEffect callback function
- so it means want to do something after rendering the component ,write inside useEffect
- need to check useEffect rendering after component render use debugger in source