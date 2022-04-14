import type { NextPage } from 'next'
import Head from 'next/head'
import { FlexContainer } from '../components/styled-components/Flex'
import { SkillsField } from '../components/styled-components/TextField'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manav Dhindsa Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexContainer>
        <SkillsField variant="outlined" label="Search Skills"></SkillsField>
      </FlexContainer>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Manav
        </a>
      </footer>
    </div>
  )
}

export default Home
