import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import close from '../images/icon-close.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import cartButton from '../images/icon-cartWhite.svg';
import '../App.css';
import { useState} from "react";
import {Topfield} from '../components';
import {BodyDetails} from '../components'
import {Price} from '../components'
// import {Productamount} from '../components';

  // const UserContext = createContext();

const Navbar = () => {
  const [isclose, setClose] = useState(false);
  const [ProductTotal, setProductTotal] = useState(0);
  const [ProductButton, setProductButton] = useState(0);

  const toggle = () => {
    setClose(!isclose);
    console.log(isclose);
  }

  const handleButton = () => {
    setProductButton(ProductTotal);
  }

  // eslint-disable-next-line no-unused-vars
  const [disable, setdisable] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [disableSub, setdisableSub] = useState(false);

  const addition = () => {
      if(ProductTotal <= 20){
          setProductTotal(ProductTotal + 1);
      }else {
          setdisable(true);
      }
  }

  const Subtract = () => {
      if(ProductTotal >= 0){
          setProductTotal(ProductTotal - 1);
          console.log(ProductTotal);
          }else{                
              setdisableSub(true);
          }
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
      <span className='imgcartHold'><img src={cart} alt='cart' className='imgcart'/><span className='totalProduct'>{ProductButton}</span></span>
      <img src={avatar} alt='avatar' className='imgavatar'/>
      </div>
      <Topfield/>
      <BodyDetails/>
      <Price/>
      {/* <Productamount/> */} 
      <div className="ProductWrapper">
          <span className="productSub" onClick={Subtract}>-</span>
          <span className="productTotal">{ProductTotal}</span>
          <span className="productAdd" onClick={addition}>+</span>
      </div> 
      <div className="ProductButton" onClick={handleButton}>
        <img src={cartButton} alt='cart' className='imgcartButton'/>
        <span className='addToCart'>Add to cart</span>
      </div> 
    </div>
    
  );
}

export default Navbar;
