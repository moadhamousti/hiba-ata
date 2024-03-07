import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'
import styles from './singlePage.module.css'

const BlogPage = () => {
  return (
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  )
}

export default BlogPage