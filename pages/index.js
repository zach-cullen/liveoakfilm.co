import Head from 'next/head'
import Button from '../components/button'

export default function Home () {
  return (
    <>
      <Head>
        <title>Live Oak Films</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Main</h1>
        <Button>
          Hello!
        </Button>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
