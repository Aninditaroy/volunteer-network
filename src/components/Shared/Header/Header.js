import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../../images/hamburger-menu.png';
import logo from '../../../logos/Group 1329.png';
const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div >
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 nav-font">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center font-bold leading-relaxed  mr-4 py-1 whitespace-nowrap text-4xl text-blue-600/80"
                        >
                            <Link to="/"><img src={logo} className="w-44" alt="logo" /></Link>
                        </span>
                        <button
                            className=" inline-flex items-center justify-center p-2 rounded-md text-white-600   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img
                                className="block h-8 w-8"
                                src={hamburgerMenu}
                                alt=""
                            />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <div className="flex flex-col lg:flex-row lg:ml-auto lg:px-10 text-sm">
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold"
                                as={Link} to="/volunteers">
                                Volunteers
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center hover:opacity-75 font-semibold"
                                as={Link} to="/donation">
                                Donation
                            </Link>
                             <Link
                                className="nav-item px-3 py-2 flex items-center  hover:opacity-75 font-semibold"
                                as={Link} to="/events">
                                Events
                            </Link>
                             <Link
                                className="nav-item px-3 py-2 flex items-center  hover:opacity-75 font-semibold"
                                as={Link} to="/blog">
                                Blog
                            </Link>
                             <Link
                                className="nav-item mt-2 px-3 py-2 flex items-center  hover:opacity-75 font-semibold"
                                as={Link} to="/login">
                                <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2 mr-2 mb-2">Login</button>
                            </Link>
                             <Link
                                className="nav-item mt-2 py-2 flex items-center  hover:opacity-75 font-semibold"
                                as={Link} to="/login">
                                <button type="button" class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-12 py-2 mb-2">Admin</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;