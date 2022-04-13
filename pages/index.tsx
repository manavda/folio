import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/styled-components/ButtonStyles'
import { FlexContainer } from '../components/styled-components/Flex'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexContainer>
        <Button>Welcome to Manav&apos;s Next.js App</Button>
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
