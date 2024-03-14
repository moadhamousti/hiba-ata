import React from 'react'
import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'
import Image from 'next/image'
import Card from '../card/Card'
import Landing from '../landing/Landing'


const CardList = () => {
  return (
    <div className={styles.container}>
        <Landing/>
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