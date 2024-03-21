import CardList from '@/components/cardList/CardList'
import React from 'react'
import styles from './bolgPost.module.css'
import { CardContent } from '@mui/material'
import Landing from '@/components/landing/Landing'

const BlogPage = () => {
  return (
    <div className={styles.content}>
      <Landing/>
      <CardContent/>
      <CardList/>
    </div>
  )
}

export default BlogPage