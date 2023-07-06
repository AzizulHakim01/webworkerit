import React, { useState } from "react";
import {NavLink, Link} from "react-router-dom";
import {useAuth} from "../../context/auth";
import {useCart} from "../../context/cart";
import {Badge, message} from "antd";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem("auth");
        message.success("Logout Successfully");
    };
    return (
        <>
            <nav className="">
                <div className="">
                    <Link to="/" className="">
                        🛍️WEBWORKERIT
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="" aria-controls="navbar-default" aria-expanded="false">
                        <span className="">Open main menu</span>
                        <svg className="" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="" id="navbar-default">

                        <ul className="">

                            <li className="">
                                <NavLink to="/" className="">
                                    Home
                                </NavLink>
                            </li>

                            {
                            !auth ?. user ? (
                                <>
                                    <li className="">
                                        <NavLink to="/register" className="">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li >
                                        <NavLink id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="" onClick={()=>setMenuOpen(!menuOpen)}>
                                            {
                                            auth ?. user ?. name
                                        } </NavLink>
                                        {
                                            menuOpen
                                            ?
                                            <div id="dropdownNavbar" className="">
                                            <ul class="" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <NavLink to={
                                                            `/dashboard/${
                                                                auth ?. user ?. role === 1 ? "admin" : "user"
                                                            }`
                                                        }
                                                        className="">
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink onClick={handleLogout}
                                                        to="/login"
                                                        className="">
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>:""
                                        }
                                    </li>
                                </>
                            )
                        }
                            <li className="">
                                <NavLink to="/cart" className="">
                                    <Badge count={
                                            cart ?. length
                                        }
                                        showZero
                                        offset={
                                            [10, -5]
                                    }>
                                        <p className="">Cart</p>
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
