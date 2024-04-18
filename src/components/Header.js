import { useState } from 'react';
import {LOGO} from '../utils/constants';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
            <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/contact'>Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <li className="login">
                        <button className="login-btn" onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                            {isLoggedIn ? 'logout' : 'login'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;