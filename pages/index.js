import Head from 'next/head'
import Hero from '../components/Hero'
import Button from '../components/Button'
import PageSection from '../components/PageSection'

export default function Home () {
  return (
    <>
      <Head>
        <title>Live Oak Films</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero
          screenPercentage={66}
          videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0'
        />
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
