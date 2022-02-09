import React from 'react'
import classes from './Navbar.module.css';
import avatar from '../../assets/avatar.png'




const Navbar = ({ sideBarOpen, openSideBar }) => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.nav_icon} onClick={() => openSideBar()}>
                <i className='fa fa-bars'></i>
            </div>
            <div className={classes.navbar__left}>
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a href="#" className={classes.active_link}>Admin</a>
            </div>
            <div className={classes.navbar__right}>
                <a href="#">
                    <i className='fa fa-search'></i>
                </a>
                <a href="#">
                    <i className='fa fa-clock-o'></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar