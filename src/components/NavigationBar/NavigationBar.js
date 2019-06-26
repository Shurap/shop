import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'
import Basket from '../Basket';

const NavigationBar = () => {
  return (
    <nav
      className={`navbar navbar-expand-sm bg-dark navbar-dark ${styles.mainWrapper}`}

    >
      <Link className="navbar-brand" to='/'>LOGO</Link>
      {/* <h1>NavigationBar</h1> */}
      <Link className="nav-link" to='/catalog'>Catalog</Link>
      <Link className="nav-link" to='/login'>LogIn</Link>
      <Link className="nav-link" to='/signup'>SignUp</Link>
      <Link className="nav-link" to='/basket'>
        <Basket />
      </Link>
    </nav>
  )
}

export default NavigationBar;

// `row ${styles.myCustomClassName}`