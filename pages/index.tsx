import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Aside from "../common/components/Aside/Aside";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Aside />
    </div>
  )
}

export default Home
