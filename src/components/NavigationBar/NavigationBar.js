import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'
import Basket from '../Basket';

const NavigationBar = () => {
  return (
    <nav className={styles.mainWrapper}>
      <div className={styles.logoWrapper}>
        <Link className={styles.links} to='/'>
          <img className={styles.logo} src="upload/logo/sneaker.png"></img>
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <Link className={styles.links} to='/'>Home</Link>
        <Link className={styles.links} to='/catalog'>Catalog</Link>
      </div>
      <Link className={styles.links} to='/basket'>
        <div className={styles.basketWrapper}>
          <Basket />
        </div>
      </Link>
    </nav >
  )
}

export default NavigationBar;