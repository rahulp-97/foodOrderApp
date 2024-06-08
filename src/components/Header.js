import { useState } from 'react';
import {LOGO} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    return (
            <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link className='nav-link' to='/about'>About us</Link>
                    </li>
                    <li className="px-4">
                        <Link className='nav-link' to='/contact'>Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link className='nav-link' to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4">
                        Cart
                    </li>
                    <li className="px-4">
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