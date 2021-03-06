import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import CurrencySelect from '../CurrencySelect';

export default function Navigation() {
  
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Home
      </NavLink>

      {isAuthenticated && <NavLink
        to="/contacts"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Contacts
      </NavLink>}

       <NavLink
        exact
        to="/currency"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Currency
      </NavLink>

      <CurrencySelect/>
      
    </div>
  );
};

