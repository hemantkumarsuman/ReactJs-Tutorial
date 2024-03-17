import React from 'react';  //importing React keyword from react package at location node_modules
import ReactDOM from 'react-dom/client';

//heading using core react
// const heading = React.createElement('h1',{id:'heading'},'Classic React');

// JSX create heading using JSX
const JsxHeading = <h1 id='heading1'>Heading using JSX</h1>;



// root.render(heading);
//root.render(JsxHeading);



//Functional component

// const HeadingComponent= function (){
//     return (
//     <h1>
//         Render it inside HeadingComponent2 class=container
//     </h1>
//     );
// };

//Another way to write react component

// const HeadingComponent2 = ()=>(
//     <div className='container'>
//         <h1 className='heading'>React component is normal javascript function which return JSX</h1>
//     </div>
    
// );



// Q) Render HeadingComponent inside container div -> This is called componenet composition
    // const HeadingComponent2 = function(){
    
    //     return (
    //     <div className='container'>
    //         <HeadingComponent/>
    //         <h1 id='heading'>This is Heading 1</h1>
    //     </div>
    //     );
    
    // };


// Q) How to insert react element inside react functional component

//create react element

const reactElementTest = (
    <h2 className='heading2'>
        We will insert reactElementTest in component
    </h2>
);

//create react component

const ReactComponentTest = ()=>(
    <div className='containertest'>
        {reactElementTest}
        <h3>reactElementTest inserted successfully</h3>
    </div>
);



const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<ReactComponentTest />);





