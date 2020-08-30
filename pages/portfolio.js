import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'
import VideoGallery from '../components/VideoGallery'
import LinkButton from '../components/LinkButton'

export default function Portfolio ({ pageContent }) {
  return (
    <>
      <Nav noHero />
      <PageSection pY='40px' />
      <PageSection>
        <CustomContainer maxW='1200px' pX='30px'>
          <VideoGallery filmCollections={pageContent.film_collections} />
          <LinkButton text="Inquire Now" href='inquire' themeColor='charcoal'>Let's Make a Movie</LinkButton>
        </CustomContainer>
      </PageSection>
      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:1337/portfolio')
  const pageContent = await res.json()
  return {
    props: {
      pageContent
    }
  }
}
