import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Nav;