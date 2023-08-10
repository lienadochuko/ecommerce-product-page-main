import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import '../App.css';

const Navbar = () => {
  return (
     <div className='Navbar'>
      <img src={menu} alt='menu' className='imgMenu'/>
      <span className='logoHold'>
      <img src={logo} alt='logo' className='imglogo'/>
      </span>
      <img src={cart} alt='cart' className='imgcart'/>
      <img src={avatar} alt='avatar' className='imgavatar'/>
      </div>
  );
}

export default Navbar;