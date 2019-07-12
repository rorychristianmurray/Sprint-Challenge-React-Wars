# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library that allows us to combine JavaScript, HTML, and CSS to render UI to the browser in a modular component based manner. It attempts to solve the problem of 'state', which is the data we have access to in our applications and how we can interact with it in a dynamic way at scale.

1. What does it mean to think in react?

Thinking in React means two things. First, it means thinking about designing your UI when using best practices so that each component is responsible for only one thing. Secondly, it means thinking about the state-props highway, which means thinking about which parent or shared component needs to manage state (the data that will change), which will require a Class Component, and then figuring out which components will only receive and render static data, which will be your functional components.

1. Describe state.

State is the current data our application has access to and the form the data is in. It can update over time based on user input and external factors.

1. Describe props.

Props are the current iteration of state that we pass to child components in order to display the current data we have. It is read-only.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is when a function call results in a state change outside of that which is strictly intended. In a React component we sync effects byt using the useEffect hook and giving it a dependency of the state we want to sync with.
