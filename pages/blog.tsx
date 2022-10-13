import type { NextPage } from 'next'
import styles from './blog.module.scss'
const BlogPage:NextPage = () => {


  return <div>
    <p className={styles.container1}>这是博客页面</p>
    <p className={styles.container2}>这是博客页面2</p>

  </div>
}

export default BlogPage
