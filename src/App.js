import logo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import avatar from './images/image-avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='Navbar'>
      <img src={menu} alt='logo' className='imgMenu'/>
      <img src={logo} alt='logo' className='imglogo'/>
      <img src={avatar} alt='logo' className='imgavatar'/>
      </div>
    </div>
  );
}

export default App;
