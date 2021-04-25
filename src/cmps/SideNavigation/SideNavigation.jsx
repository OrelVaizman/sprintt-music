
import React from 'react'

import './SideNavigation.scss'
import logo from '../../assets/imgs/logo.png'
import { Routes } from '../../router/index';
import { NavLink } from 'react-router-dom';
const SideNavigation = (props) => {

    return (
        <section className="side-navigation-container">
            <nav className="side-navigation flex column">
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <ul className="navigation-list clean-list flex column">
                    {Routes.map((route, i) => <NavItem route={route} key={i} />)}
                </ul>
            </nav>
        </section>
    )


}

const Logo = () => {
    return (
        <img src={logo} className="logo" alt="Sprintt-Music" />
    )
}

const NavItem = ({ route }) => {
    const { path, iconFile, navText } = route;
    const iconSrc = require(`../../assets/imgs/${iconFile}`)
    return (
        <li>
            <NavLink className="nav-item flex align-center" exact to={path} activeClassName="selected">
                <img className="nav-icon" src={iconSrc.default} alt={navText} />
                {navText}
            </NavLink>
        </li>
    )
}

export default SideNavigation
