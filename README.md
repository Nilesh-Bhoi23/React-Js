## React Js
<hr><i> <b>
1) My First React Code:- React application are built using Components , which are reusable and Self-contained pieces of UI. Components can be either functional or class-based              
<br>
  <hr>
2) Props and JSX:-                         
   Props :- Props(short for "properties") are read-only inputs that are passed to Components.they allow you to pass data and event handlers to Child Components.
   JSX:- JSX is a syntax extension that looks similar to HTML and is used to describe the UI. It makes it easier to write and visualize the structure of your components.<br><hr>
3) Hooks & State in React                 
  Hooks:- Hooks are special functions that let you "hook into" React's state and lifecycle features from functional components.
  State :- State is an object that determines how a component renders and behaves. it is mutable and can e changed over time .triggering a re-render of the component.
<hr>
4) useEffect() :- Handles side effects like data fetching, subscriptions, or manually updating the DOM.                               <br>
<hr>
5) useRef() :-  useRef is a React hook that returns a mutable ref object. This object has a single property, current, which can be initialized with a value (or null by default).
                               <br><hr>
6) Conditional Rendering & Rendering Lists in React <br>
<hr>
7) EventHandling:- An event in programming, particularly in JavaScript and React, refers to an action or occurrence that takes place in the browser or application that can be detected and responded to. Events are typically triggered by user interactions such as: <br>

Clicking a button <br>
Typing on the keyboard <br>
Hovering over an element <br>
Submitting a form <br>
Scrolling a page <br>
<br><hr>

8) Router: A component that manages the navigation and rendering of routes. In React, the BrowserRouter (or simply Router) is a common router that uses the HTML5 history API to keep the UI in sync with the URL.

Route: A component that defines a path and associates it with a specific component. When the URL matches the path, the associated component is rendered.

Switch (deprecated in React Router v6, replaced by Routes): A component that renders the first Route or Redirect that matches the current URL.

Link: A component used to create navigational links that update the URL without causing a page refresh.

Navigate: A component or hook used to programmatically navigate to different routes.

History: An object that keeps track of the browser’s history and allows navigation through the history stack (used internally by routers to manage navigation).

Dynamic Route: A route that includes parameters in the path, which can be used to render content based on those parameters. <hr><br>
9) In React, Context is a feature that allows you to share values or state between different components in your application without having to pass props down manually at every level. This can be especially useful for things like global settings, themes, or user authentication information that many components need to access.

Key Concepts of React Context:
Creating a Context:

You create a context using React.createContext(). This method returns a Context object, which has two components: a Provider and a Consumer.
Provider:

The Provider component is used to wrap the part of your application that needs access to the context. It accepts a value prop, which will be passed down to any component that consumes this context

useContext Hook:

In functional components, you can use the useContext hook to consume context values more easily, without needing to use the Consumer component.
</b>
</i>
