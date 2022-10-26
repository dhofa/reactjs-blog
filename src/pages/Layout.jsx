import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import styles from '../style/Layout.module.css'

export default function Layout(props) {
  const { title, children } = props
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> {title ? title : 'Page Title'}</title>
        </Helmet>
      </HelmetProvider>

      <Navbar/>
      
      <section className={styles.wrap}>
        {children}
      </section>
    </>
  )
}
