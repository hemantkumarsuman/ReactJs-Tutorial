import React from 'react';  //importing React keyword from react package at location node_modules
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',{id:'parent'}, 
    [
        React.createElement(
            'div',{id:'child'},
            [React.createElement('h1',{},'I am h1 tag inside child div'),
            React.createElement('h2',{},'I am h2 tag')
            ]
        ),
        React.createElement(
            'div',{id:'child2'},
            [React.createElement('h1',{},'I am h1 tag inside child div'),
            React.createElement('h2',{},'I am h2 tag')
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(parent);

//But thhis method is messy which make difficult to understand the code. 
//To simplify this JSX has been introduced.
//Above code is core React way to write the code.


// Q)What will happen if we already have tag in root div then we render parent in root??
// <div class="root">
//     <h1>Hemant</h1>
// </div>

// ANS:render will replace '<h1>Hemant</h1>' with parent element 





