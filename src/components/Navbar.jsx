import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import close from '../images/icon-close.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import cartButton from '../images/icon-cartWhite.svg';
import productImage from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';
import '../App.css';
import { useState } from "react";
import { Topfield } from '../components';
import { BodyDetails } from '../components'
import { Price } from '../components'
// import {Productamount} from '../components';

// const UserContext = createContext();

const Navbar = () => {
  const [isclose, setClose] = useState(false);
  const [isCartclose, setCartClose] = useState(false);
  const [ProductTotal, setProductTotal] = useState(0);
  const [ProductButton, setProductButton] = useState(0);

  var total = ProductButton * 125.00;
  const toggle = () => {
    setClose(!isclose);
    console.log(isclose);
  }

  const handleButton = () => {
    setProductButton(ProductTotal);
  }

  const handleReset = () => {
    setProductButton(0);
    setProductTotal(0);
  }

  const handleCartView = () => {
    // console.log(isCartclose);
    setCartClose(!isCartclose);
  }

  // eslint-disable-next-line no-unused-vars
  const [disable, setdisable] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [disableSub, setdisableSub] = useState(false);

  const addition = () => {
    if (ProductTotal <= 20) {
      setProductTotal(ProductTotal + 1);
    } else {
      setdisable(true);
    }
  }

  const Subtract = () => {
    if (ProductTotal >= 0) {
      setProductTotal(ProductTotal - 1);
      console.log(ProductTotal);
    } else {
      setdisableSub(true);
    }
  }


  return (
    <div className='wrapper'>
      {isclose ?
        <div className='bar'>
          <span className='sideBar' >
            <img src={close} alt='close' className='imgClose' onClick={toggle} />
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
        <img src={menu} alt='menu' className='imgMenu' onClick={toggle} />
        <span className='logoHold'>
          <img src={logo} alt='logo' className='imglogo' />
        </span>
        <div className='navItems'>
              <span className='item'>Collections</span>
              <span className='item'>Men</span>
              <span className='item'>Women</span>
              <span className='item'>About</span>
              <span className='item'>Contact</span>
        </div>
        <span className='imgcartHold'>
          <img src={cart} alt='cart' className='imgcart' onClick={handleCartView} />
          <span className='totalProduct' style={{display:ProductButton === 0? 'none' : 'flex'}}>{ProductButton}</span>
        </span>
        <img src={avatar} alt='avatar' className='imgavatar' />
      </div>

      <div className='MainContainer'>
       <Topfield />
       {isCartclose ?
        <div className='CartView'>
          <div className='cartTitle'>
            <span className='titleCart'>Cart</span>
          </div>
          {ProductButton === 0 ?
            <div className='checkOutEmpty'>Your cart is empty</div>
            :
            <div className='checkOutEmpty1'>
              <div className='checkOut'>
                <img src={productImage} alt='product' className='CartProductImage' />
                <div className='ProductDetails'>
                  <div className='ProductTitle1'>Fall Limited Edition Sneakers</div>
                  <span className='ProductPrice'>$125.00 x {ProductButton}<b style={{ color: 'black', marginLeft: 10 }}> ${total}.00</b></span>
                </div>
                <img src={deleteIcon} alt='product' className='CartDeleteProduct' onClick={handleReset} />
              </div>
              <button className='checkOutButton'>Checkout</button>
            </div>
          }
        </div>
        : ''
      }
       <div className='MainRight'>
        <BodyDetails />
        <Price />

      {/* <Productamount/> */}

      <div className='MainBottom'>
      <div className="ProductWrapper">
        <span className="productSub" onClick={Subtract}>-</span>
        <span className="productTotal">{ProductTotal}</span>
        <span className="productAdd" onClick={addition}>+</span>
      </div>

      <div className="ProductButton" onClick={handleButton}>
        <img src={cartButton} alt='cart' className='imgcartButton' />
        <span className='addToCart'>Add to cart</span>
      </div>
      
      </div>

      </div>
      <div/>
    </div>
    </div>

  );
}

export default Navbar;
