# Optimizing our app

## Single Responsibily principle  - [ep9part01]
- if we have a function or class or an identity must have single responsibily
- ex: lets say a component RestaurantMenu , this is a function and its only job is it to display restaurant menu
- modularity means break down your code into small small compoennts and diff diff uitility functions, so that your code becomes more *maintainable* and *testable*, so you get feature of *reusability*
- make test cases for every piece of code


## Custom Hooks
- Hooks are like as uitility functions or just normal js functions
- useState, useEffect, useParams(by react router)
- what we will do is we just take out some responsibily from component and extract it inside hook, so our hook and component or code becomes more modular and readable


-  [ep9part02]
- so lets make a custom hook in restaurant menu 
- restaurant menu have two resposiblities
*  fetching the data 
* displaying the data 
- we can make custom hook to fetch data and remove implementation of fetching the data
   * so code becomes more readable and modular
   * follow the single responsible principle

- best place to create custom hooks in utils folder
- prefer seperate file for seperate hook with stating (use and compoent name)


## online status
- create custom hook 
- think about contract before making curtom hook i,e input and output(return value)
- we use event listener to check wherther the user is online or not
- window.online , browser gives us access
- keeps track on when the internet in online and when the internet is offline

- to get icons in vs code itself use (windows + .)


##  [ep9p5]
- how to optimize one js file combined with many js files
- because if we add more and more component js file size increases
- when you are going to build large react application you need to break down my app into smaller pieces
- as we knwo bundling is important
- we can not do 1000 files into one file and
- we can also dont want 1000 seperate files or 1000 req
- both these solutions are not good
- we can make smaller bundles of these files
- this process is known as *CHUNKING* or *CODE SPLITTING* OR *DYNAMIC BUNDLING* OR *LAZY LOADING* 

- a bundle has enough code for a major feature in our app and then we can split our bundles into these logical chunks
- similarly like make my trip they forms a
* seperate bundle for hotels, 
* seperate bundle for Flights and so on

- so now how can we make a seperate bundle for grocery?
- do not import grocery directly in app.js instead use lazy loading to import grocery
- initialy it did not loads the code for grocery it only loads when we click on grocery store in header then it loads using lazy loading

- const Grocery = lazy(() => import("./components/Grocery.js"))
- throwing error - component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.

