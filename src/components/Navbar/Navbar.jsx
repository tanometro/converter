import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <img src='/Icon.svg' className={styles.isotipo} alt='App icon'/>
        <h1 className={styles.logotipo} >unit converter</h1>
    </div>
  )
}

export default Navbar