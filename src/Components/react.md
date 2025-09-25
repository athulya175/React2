React is a JS library(not a framework) developed by facebook for building user interface
* A framework is a predefined structure or skeleton for building software applications.

* Library = toolbox → you pick only what you need, no strict structure.

* It helps you build interactive web apps easily.

    Instead of reloading entire pages, React updates only the parts that change.

    Benefits:

    Fast rendering using Virtual DOM

    Reusable components

    Strong community & ecosystem

    Great for building SPAs



* faster & Smoother User Expirence
----------------------------------
    React used a vritual DOM->insted of reloading the whole pafe,it only updates the part that changes.

    This makes app fast and responsive,like mobile app

    Virtual Dom : VDOM is a simply a lightweight copy of real DOM stored in m/y. react uses it to compare changes(diffing) and update only what's needed in the real DOM.

    when we use normal DOM a small updation will leads to entire page  re-render but in case of VDOM it updtes only the updated parts

* Reusable Components
----------------------
    In react we builds apps with component so suppose we create a component named button->then it can reuse many times with diffrent label.

* Single-page Application (SPA) support
---------------------------------------
    Modern users expect apps to work like Gmail, Facebook, or Twitter (no page reloads).

    In single page applications however we are working with one single template and simply updating all the components within the dom.

 * Multi-Page Application (MPA):
------------------------------

    Traditional websites (e.g., Amazon, news sites).

    Every time you click a link, the server reloads a new HTML page.

* Single Page Application (SPA):
---------------------------------

    React apps are typically SPAs.

    The whole app runs in one HTML page (index.html).

    Navigation and updates happen without reloading the page.

    Example: Gmail

* COMPONENTS

    Each component is a pice of UI(button,navbar,card...)
    Components can be reused.
    
    A component contain one component which contain more container it can be deeply nested

10 min vdo
----------
    intsed of writing traditional html tags we can write to be using called jsx.(JSXML)
     JSX->Compiler->JS

* URL Routing
     using a react router is how we can have multiple page in a single page application.with react we typically handle url routing with something callled a router that keeps our ui in sync with a url because we are not actually changing pages the router will take care of rendering out components into the dom based on the current url<Router></Router>

* Props    
    When you need to pass data down from one component to another you can pass it down as prop  a prop can be passed down as like a function parameter
     
     // child component
     function Welcome(props){
        return<h1>hello,{props.name}</h1>
     }
     // parent component
      function App(){
        return(
            <div>
                <welcome name='Athulya'/>
            </div>
        )
      }
    props can be passed down multiple layers if needed the term for this is called prop drilling.

* State
    state is a js object used to represent information in or about a particular component. traditionaly use class based component to set our state and its value ,in modern on functional component we use react hook like use state to create a component state
    
    State is a special object in component that hold data that can change over time. changing state update ui automatically

* Component life cycle
    *initialization->*Mounting->Updating->*Unmounting

   
    1)Mounting:Component is being created and inserted into the DOM

        methods/hooks used:

        * class Components:Constructor(),render(),componentDidMount()
        * functional component(with hooks): useEffect(()=>{...},[])
        Ex: Fetching data from an API when the components first appears

    2)Updating:Component's sate or props change

        methods/hooks used

        * class components:componentDidUpdate(prevProps,PrevState)
        * functional components:useEffect(()=>{...},[dependency])
        Ex: Updating UI when a user types in a form or click a button

    3)Unmounting:component is removed from the DOM

        methods/hooks used:

        *Class components:componentWIllUnmount()
        *Function components: useEffect(()=>{return cleanupFunction},[])
        * Ex: Cleaning up timers,subscription,or event listeners
* Hooks
    Hooks are basically works with functional components, and before hooks we can't use state or lifecycle methods in  functional component [[useHookname()]]

    hooks are simply functions that allow us to hook into and manage state
    
    useState()==> Set & update state
    useEffect()==>Perform side effect in lifecycle

* Global state
    Global State=data that is shared across multiple components in your app.

    unlike local state(managed inside a single component with useState),global state is accessible anywhere without passing props through every level.

    it avoids prop drilling(passing props through many layers just to reach a child component).

    Keeps your app consistent because many components use the same data.

    we can use useContext(simple case)

* key prop
    key is a special prop in React used when rendering lists of elements.

    it helps react identify which item have changed,added,or removed.

    without keys,React has to render the entire list,which is slower.
* Event Listner
    <li onClick={openNotes}>
    here we pass the function  directly  inside a braces on eventListner.
* Forms
    form data is controlled by react state
    every input field's value comes from state,and changes update the state
* Conditional rendering
    based on conditions
* commands
    npx create-react-app <appname>  --> creates the boilerplate files for a react application
    npm start   ----> the start command that start up our development so we can view our project right away
    npm run build   --->build a directory for a production build of our app for deployment


* what is jsx

    jsx=javaScript XML
    it  allows you to write HTML-like syntax inside JavaScript
    Browsers don't understand JSX directly->React transplies it to plain js using babel.

jsx looks like HTML inside js
 const element=<h1>Hello,React!</h1>

 Browsers cannot run JSX directly,because it's not valid javaScript.Browsers only understand plain JavaScript. so React uses Babel(a javaScript compiler).Babel transfroms JSX into regular JavaScript function calls that the browser can understand.

  const elelement=<h1>Hello,React!</h1> converted in to-->const element=React.createElement("h1",null,"Hello React!")// in createElement (type,props,...children) here 2nd params is props here we are not giving any props like classNAme,id,style thats why adds null 
  ->React.createElement creat a React element object
  ->React then uses this object to update the DOM efficiently via the virtual DOM


  JSX syntax
  ---------

 *  Elements look like HTML
        const element=<h1>Hello,React</h1>

* JSX can contain JavaScript expressions(use curly braces{} to embed js)
    const curly braces{} to embed js
    const name="Athulya"
    const element=<h1>Hello,{name}!</h1>

* JSX must have a single root element
    const element=<h1>Hello</h1><p>Welcome</p> this is not valid this will throw error

    const element=(  // wrap in a div or in a fragment
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    )

* Attributes in jsx
    HTML attributes are written in camelCase
        <div className="box"></div>

* conditional Rendering
    const isLoggedIn=true
    const element =<h1>{isLoggedIn ?"welcome Back!" :"Please Login"}</h1>

* List in jsx
    const fruits=["Apple","Banana","Cherry"];
    const listItem=fruits.map((fruit)=><li key={fruit}>{fruit}</li>)
    const element=<ul>{listItem}</ul>

 
#  npm create vite@latest
#  cd vite-project
#  npm install
#  npm run dev  -->to start the development server.

npm :node package manager

> node_modules
    * its just contains external libraries and packages that our project relies on 
> public
    * it contains any public assest one of here is a "vite image", it should be contains public fonts images videos
    * they're not bundled during the final o/p,they're typically available via a URL 
>  src 
        * here is the most of the time we works on
    > assets
        * its something similar to public folder,
        *assets folder are bundle during the final o/p.but public assets are not and they're generally available via a URL
    > main.jsx
        * This file is the entry point of our React application.it tells React where to render App.jsx in the HTML.
        * main.jsx imports App and mounts it to the div#root in index.html.
            $ Mounting” means telling React: “Render this component and attach it to the actual HTML page.”
            $ div#root in index.html-->our index.html file usually has a single <div> like--> <div id="root"></div>. 
            $ This is the placeholder where react will render our entire app
    > App.jsx
        * This file defines your root React component,ie the main UI of our application
        * Think of App.jsx as the "what your app looks like" file
    > App.css & index.css
        * index.css is the main css file for our application.and its imported in main.jsx
>index.html
    * its the main entry point into our program
    * within the body of our document we have a development an id with root and also a script to our main jsx file
> package.json
    * json files are strutured in key value pairs this file contains metadata such as project name the version number,what "build" we're using here we using "vite-buld".

# delete App.css nothing because we dont need it
in components inside the fn's return we can write normal html
# &copy;  -->for copywrite

# if we returning a js inside a function on jsx it should be with in {} but if its outside the the return then no need of {}

# css Styling
---------------
1) External
2) Modules
3) Inline

# props
    read-only properties that are shared between components.A Parent component can send data to child component
    <Component key=value/>

    if we are giving property and its not a string then it should enclosed within {}-->number,boolean, and if we are using boolean then needs to be use a ternary operator

# propType
    a mechanism that ensures that the passed value is of the correct datatype.
    age:PropTypes.number

    // if we pass propType that will not break our program insted on console there came a warning

# defaultProps
    default value for props in case they are not passed from the parent component
    name:guest

# conditional rendering
    allows you to control what gets renderd in your application based on certain conditions(show,hide,or change components)
# click event 
    An interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onClick event handler.

# React hook
    Special function that allows functional components to use React features without writing class components
    (useState,useEffect,useContext,useReducer,useCallback)

# useState()
    A react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual Dom [name,setName]

# onChange
    event handler used primarily with form elements ex,<input>,<select>,<radio> Triggers a function every time the value of the input changes.
# updater function (same in counter)
    * A function passed as an argument to setState() usually ex. setYear(year+1)
    * Allow for safe updates based on the previous state 
    *Used with multiple state updates and asynchronous functions,good practice use updater fns
# update object state

# useEffect() 
    React Hook that tells React do some code when(pic one)
        "This component re-renders"
        "This component mounts"
        "This state of a value"

    * useEffect(function,[dependencies])
        1.useEffect(()=>{})           // Runs after every re-render
        2.useEffect(()=>{},[])       //Runs only on mount and not during every render, that means this code only runs once when the component mounts.
        3.useEffect(()=>{},[value]) // Runs on mount + when value changes
    
    * USES
        1. Event listeners
        2. Dom manipulation
        3. Subscriptions(real-time updates)
        4. Fetching
        5. Clean up when a component unmount

# mounting :Adding a component to the dom
# unmounting : removing a component from the dom

# useContext()  {Component A,Component B...} 
    React hook that allows you to share values b/w multiple leverls of components without passing props through each level
   # here its called prop drilling-->we created a state variable inside the component-A,and pass it as a props to component-D through A->B->C->D :=> here prop drilling is a liitile complecatitve insted of that we can use useContext()hook

# useContext()
    React Hook that allows you to share values between multiple levels of components without passing props through each level.

    Provider Component
        1. import{createContext} from 'react'
        2.export const MyContext=createContext()
        3.<MyContext.Provider value={value}>
            <child/>
          <MyContext.Provider>

    Consumer Components
        1.import React,{useContext} from 'react'
            import{MyContext} from './Component'
        2. Const value=useContext(MyContext)

# useRef()
    "use Reference" Does not cause re-renders when its value changes.When you want a component to "remember" some information,but you don't want that information to trigger new renders.

    1. Accessing/Interacting with DOM elements
    2. Handling Focus,ANimations,and Transitions
    3. Managing Timers and Intervals
