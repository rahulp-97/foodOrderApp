import { useState } from 'react';
import {LOGO} from '../utils/constants';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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