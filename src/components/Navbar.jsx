import React from 'react'
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import styles from '../style/Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.wrap}>
        <img src="/logo192.png" alt="Logo Apps"/> 
        <nav>
          <Link to={'/'} >
            <Buttons text={'Home'}/>
          </Link>
          <Link to={'/about'}>
            <Buttons text={'About'}/>
          </Link>
          <Link to={'/posts'}>
            <Buttons text={'Posts'}/>
          </Link>
        </nav>
      </header>

  )
}
