import { useEffect, useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
  console.log('Header rendered');

  const [btnLoginReact, setBtnLoginReact] = useState('login');


  //When we do not use dependency array useEffect() will render everytime component render
  useEffect(()=>{
    console.log('UseEffect rendered');
  });

  //When useEffect() called with empty dependency useEffect() will be called just once at 1st render of component
  useEffect(()=>{
    console.log('useEffect with empty dependency');
  },[]);

  //When useEffect() called with some dependency array useEffect() will be called when dependency changes
  //In below example whenever btnLoginReact button changes, useEffect() will be called
  useEffect(()=>{
    console.log('Useeffect with dependency');
  },[btnLoginReact]);

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={logo_url}/>
        </div>
  
        <div className='nav-items'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <button className="login" onClick={()=>{
              if(btnLoginReact==='Login')setBtnLoginReact('Logout');
              else{setBtnLoginReact('Login');}
            }}>
              {btnLoginReact}
            </button>
          </ul>
        </div>
      </div>
    );
}

export default Header;