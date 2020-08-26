import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PageSection from '../components/PageSection'

export default function About ({ pageContent }) {
  return (
    <>
      <Nav />
      <Hero
        screenPercentage={50}
        videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0'
      />
      <PageSection />
      <Footer />
    </>
  )
}
