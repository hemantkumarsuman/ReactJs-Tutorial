# In industry instead of using' npx parcel index.html' to build app ,they add script in package.json file
- "scripts": {
-   "start": "parcel index.html"
-  },

- Whenever we want build project we use command 'npm run start'
- Above command will internally call 'parcel index.html'

# To create element in react we use "React.createElement('div',{},'Hi Hemant')" but as we create this for nested structure it become very clumsy for #    developer. Therefore, JSX has been introduced.

# JSX=> JSX is not HTML in JS
- It has HTML like syntax
- Example: const JsxHeading = <h1 id='heading1'>Heading using JSX</h1>;
- While providing attribute to JSX element we use camel case naming convention.
- If you write jsx in multiple line then we have to wrap JSX code in (). If not then babel will not understand where JSX is starting and ending.
- Example: 
    const JsxHeading = (<h1 id='heading1'>
                         Heading using JSX
                        </h1>);

- 

# Is above code is valid JS code?

- JS is a code which JS engine understands. But JS engine does not understand JSX.
- So when we build our code using parcel, parcel will install package called 'babel'.
- 'babel' will transpiled(convert) JSX into a code which browser/react can understand.

# How JSX covert?

- Basically JSX is converted into React.createElement-> Object -> render into root as HTML tags .This whole converting process done by 'babel'.

- In react component, we can write any vanilla javascript inside {}.


#### React Components=>
- Class Based Component:

- Functional Component(New way): Normal Javascript functions that return JSX.
  Example: 
  const HeadingComponent= function(){
    return <h1>React component which return JSX</h1>
  }

- Always name React component which start with Capital letters-> By doing this react will understand that this function is component

- Syntax to render component in root: 'root.render(<HeadingComponent2/>);

- Component composition => component inside component

- NOTE: To write functional component we should use arrow function even though we can use other type of functions.
