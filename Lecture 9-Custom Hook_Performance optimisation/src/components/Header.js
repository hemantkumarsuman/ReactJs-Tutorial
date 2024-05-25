import { useEffect, useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
  const [btnLoginReact, setBtnLoginReact] = useState('login');

  const onlinestatus = useOnlineStatus();

  
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
              Online Status:{
                onlinestatus? '✅':'🔴'
              }
            </li>
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