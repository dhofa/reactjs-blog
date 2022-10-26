import React from 'react'
import Card from '../components/Card';
import Layout from './Layout';
import styles from '../style/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout
        title={'Home Page'}
        children={
          <div className={styles.gridView}>
            <Card title={'adasbdasjkdas'}/>
            <Card title={'adasbdasjkdas asdasdas adasbdasjkdas asdasdas adasbdasjkdas asdasdas adasbdasjkdas asdasdas adasbdasjkdas asdasdas '}/>
            <Card/>
            <Card/>
          </div>
        }
      />
    </>
  )
}
