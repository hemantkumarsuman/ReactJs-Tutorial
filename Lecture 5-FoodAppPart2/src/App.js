import React from 'react';  //importing React keyword from react package at location node_modules
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';



/*
-Header
 -Logo
 -Nav-Items
-Body
 -Search
 -RestaurantContainer
  -RestaurantCard
-Footer
 -Copyright
 -Links
 -Address
 -Contact
*/


const AppLayout = ()=>{
  return (
    <div className='app'>
      
      <Header/>
      <Body/>
    </div>
  );
}



const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<AppLayout/>)


