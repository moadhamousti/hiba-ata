import React from 'react'
import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'

import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../card/Card'), { ssr: false });

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.cardListContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    <Pagination/>
    </div>
  )
}

export default CardList