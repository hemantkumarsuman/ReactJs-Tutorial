const heading = React.createElement('h1',{id:'heading'},'Hello World From React JS');//This will create react elemnt h1 which is javascript object
//console.log(heading);//return object

//createElement take 3 argument ('type of tag',{object will have all the attribute we want to provide to h1 tag}, {content inside tag})

//create root element in react page where all content render
//const root = ReactDOM.createRoot(document.querySelector('.root'));//target div.root to make div.root as root of page

//root.render(heading); //render heading into root div->render basically take the heading object convert into h1 tag and put it into root


// How to create nested html tags in react like below:
/* 
<div id='parent'>
    <div id='child'>
        <h1>
                
        </h1>
    </div>
</div> 
*/

// const parent = React.createElement(
//     'div',{id:'parent'}, 
//     React.createElement(
//         'div',{id:'child'},
//         React.createElement('h1',{},'I am h1 tag inside child div')));

//const root = ReactDOM.createRoot(document.querySelector('.root'));//target div.root to make div.root as root of page

//root.render(parent); //render heading into root div->render basically take the heading object convert into h1 tag and put it into root
//console.log(parent);


//Now we want to create sibling like:
/* 
<div id='parent'>
    <div id='child'>
        <h1>
           I am h1 tag     
        </h1>
        <h2>
           I am h2 tag
        </h2>
    </div>
    
</div> 
*/

// 3rd argument of createElement is children of 1st argument so if we want to give more than 1 children then we will use array for 3rd argument . 
// For ex: we will create above structure


// const parent = React.createElement(
//     'div',{id:'parent'}, 
//     React.createElement(
//         'div',{id:'child'},
//         [React.createElement('h1',{},'I am h1 tag inside child div'),
//         React.createElement('h2',{},'I am h2 tag')
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.querySelector('.root'));
// root.render(parent);

//Now let say we want to make structure like:
/* <div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    
</div>  */

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





