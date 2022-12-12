import './Header.css';
import {Link} from "react-router-dom";

const Header = () => (
    <header className='header'>
      <nav >
        <img alt="" src={require(`./data/imgs/logo.png`)}></img>
        <div className='header-links'>
          <ul>
            <li><Link to='/' className='Nav-link'>Главная страница</Link></li>
            <li><Link to='/list' className='Nav-link'>Фотографы</Link></li>
          </ul>
        </div>
        <div className='language'>
          <h3>EN</h3>
          <h3>RU</h3>
        </div>
    </nav>
    
  </header>
)
export default Header;