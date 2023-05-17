import React, {useContext, useState} from 'react';
import {GlobalState} from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/shopping-cart.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [isUser] = state.userAPI.isUser
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/supportChat">Users</Link></li>
 
                {/* <li><Link to="/Emp">Employees</Link></li>
                <li><Link to="/Repair">Repairs</Link></li>
                <li><Link to="/allOrder">Orders</Link></li>
                <li><Link to="/all-deliveries">Deliveries</Link></li>
                <li><Link to="/addedwarranty">Warranties</Link></li> */}

                <li className='dashBoardColor'><Link to="/dashBoard">DashBoard</Link></li>
                <style>{`
                        .dashBoardColor:hover a {
                            background-image: linear-gradient(to right, #1BDFDF, #056ED7, #47C6FD);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                          }
                    `}</style>

            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li className='logOutRed'><Link to="/" onClick={logoutUser}>Logout</Link></li>
                {/* <li><Link to="/pro">Profile</Link></li> */}
                <style>{`
                        .logOutRed:hover a {
                        color: red;
                        }
                    `}</style>
 
            </>
        )
    }

    const UserRouter = () =>{
        return(
            <>
                <li><Link to="/history">Your History</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header className='font-medium'>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo pl-3">
                <h1 className='happyTopicNav'>
                    <Link to="/">{isAdmin ? 'Happy Admin' : 'Happy Mobile'}</Link>
                </h1>
                <style>{`
                        .happyTopicNav:hover a {
                            background-image: linear-gradient(to right, #EDFE00, #E6BA09, #C06F05);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                          }
                    `}</style>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                <li><Link to="/cuswarranty">{isAdmin ? '' : 'Your Warranties'}</Link></li>

                <li><Link to="/cusrepair">{isAdmin ? '' : 'Your Repairs'}</Link></li>

                {isAdmin && adminRouter()}

                {isUser && UserRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header;
