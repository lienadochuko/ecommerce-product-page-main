import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import close from '../images/icon-close.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import '../App.css';
import { useState } from 'react';
import {Topfield} from '../components';
import {BodyDetails} from '../components'

const Navbar = () => {
  const [isclose, setClose] = useState(false);

  const toggle = () => {
    setClose(!isclose);
    console.log(isclose);
  }
  return (
    <div className='wrapper'>
      {isclose?
      <div className='bar'>
        <span className='sideBar' >
      <img src={close} alt='close' className='imgClose' onClick={toggle}/> 
      <div className='sidebarItems'>
        <p className='item'>Collections</p>
        <p className='item'>Men</p>
        <p className='item'>Women</p>
        <p className='item'>About</p>
        <p className='item'>Contact</p>
      </div>       
      </span>
      <span className='darkside' onClick={toggle}></span>
      </div> : ''        
      }
     <div className='Navbar'>
      
      <img src={menu} alt='menu' className='imgMenu' onClick={toggle}/>
      <span className='logoHold'>
      <img src={logo} alt='logo' className='imglogo'/>
      </span>
      <img src={cart} alt='cart' className='imgcart'/>
      <img src={avatar} alt='avatar' className='imgavatar'/>
      </div>
      <Topfield/>
      <BodyDetails/>
    </div>
  );
}

export default Navbar;
