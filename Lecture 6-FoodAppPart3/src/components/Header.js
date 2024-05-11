import { useState } from "react";
import { logo_url } from "../utils/constants";

const Header = ()=>{

  const [btnLoginReact, setBtnLoginReact] = useState('login')
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={logo_url}/>
        </div>
  
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
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