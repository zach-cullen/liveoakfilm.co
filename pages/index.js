import Head from 'next/head'
import Hero from '../components/hero'
import Button from '../components/button'
import PageSection from '../components/PageSection'

export default function Home () {
  return (
    <>
      <Head>
        <title>Live Oak Films</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        <PageSection>
          <h1>Hello!</h1>
          <Button>
            Contact
          </Button>
        </PageSection>
        <PageSection>
          <h1>See you later.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Auctor eu augue ut lectus arcu. Pharetra massa massa ultricies mi quis. Pretium lectus quam id leo in vitae turpis massa.</p>
        </PageSection>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
