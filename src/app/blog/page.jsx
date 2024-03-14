import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'
import styles from './singlePage.module.css'
import { CardContent } from '@mui/material'
import Landing from '@/components/landing/Landing'

const BlogPage = () => {
  return (
    <div className={styles.content}>
      <CardContent/>
      <Landing/>
      <CardList/>
      {/* <Menu/> */}
    </div>
  )
}

export default BlogPage