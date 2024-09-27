import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (

    <nav className={classes['center nav']}>
      <ul className={classes['nav__list']}>
        <li className={classes['nav__list-item']}>
          <NavLink
            to="/"
            className='link link--nav'
          >
            Home
          </NavLink>
        </li>
        <li className={classes['nav__list-item']}>
          <NavLink
            to="/about"
            className='link link--nav'
          >
            About
          </NavLink>
        </li>
        <li className={classes['nav__list-item']}>
          <NavLink
            to="/projects"
            className='link link--nav'
          >
            Projects
          </NavLink>
        </li>
        <li className={classes['nav__list-item']}>
          <NavLink
            to="/services"
            className='link link--nav'
          >
            Services
          </NavLink>
        </li>
        <li className={classes['nav__list-item']}>
          <NavLink
            to="/contact"
            className='link link--nav'
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


