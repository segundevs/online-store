import {useState} from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

import './header.scss';

const Header = ({value, setValue}) => {

  const selector = useSelector(state => state.cart);

  const {cartItem} = selector;

  const [isOpen, setIsOpen] = useState(false);
  // const [text, setText] = useState('');

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav__brand">
          My Shop
        </div>

        <div className="navbar__links-container">
        <div className="header__filter">
          <select className="header__filter-select" value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          {/* <div className="header__filter-input-container">
            <input className="header__filter-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <SearchIcon className="searchIcon"/>
          </div>    */}
          
        </div>
        <div className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/contact" className="nav__link">Contact</Link>
          <Link to="/login" className="nav__link sign-in">Sign in</Link>
        </div>

        {isOpen && <div className="nav__links-mobile">
          <Link to="/" className="nav__link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/contact" className="nav__link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="nav__link sign-in" onClick={() => setIsOpen(false)}>Sign in</Link>
        </div>}


        <div className="menu-icon" onClick={() => setIsOpen(prev => !prev)}>
          {!isOpen ? <MenuIcon className="toggleIcon"/> : <CloseIcon className="toggleIcon"/>}
        </div>

        <Link to="/cart" className="nav__link cart">
          <ShoppingCartIcon className="cart-icon"/>
          <span className="cart__products-number">{cartItem.length}</span>
        </Link>

        </div>
      </nav>
      
    </header>
  )
}

export default Header
