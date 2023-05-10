import React from 'react';
import './Navigation.css';
import logo from '../../../image/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    // When the user scrolls down 200px from the top of the document, slide down the navbar
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "#dee2e6";
        } else {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "transparent";

        }
    }


    function openNav() {
        document.getElementById("mySidenav").style.width = "50%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark animated">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={logo} alt="" /></Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">

                        <NavLink to='/' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                        <NavLink to="/membership" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Membership</NavLink>

                        <NavLink to="/events" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Events</NavLink>

                        <NavLink to="/course" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">course</NavLink>

                        <NavLink to="/blogs" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Blogs</NavLink>

                    </div>
                </div>


                <div id="mySidenav" className="sidenav">
                    <b className="closebtn" onClick={() => closeNav()}>&times;</b>
                    <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                    <NavLink to="/membership" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Membership</NavLink>

                    <NavLink to="/events" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Events</NavLink>

                    <NavLink to="/course" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Course</NavLink>

                    <NavLink to="/blogs" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Blogs</NavLink>

                </div>
            </div>
        </nav>

    );
};

export default Navigation;