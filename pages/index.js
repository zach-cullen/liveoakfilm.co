import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LinkButton from '../components/LinkButton'
import PageSection from '../components/PageSection'
import SectionContainer from '../components/SectionContainer'
import CustomContainer from '../components/CustomContainer'
import VideoGallery from '../components/VideoGallery'
import ReviewGallery from '../components/ReviewGallery'
import Text from '../components/Text'

export default function Home ({ pageContent }) {
  return (
    <>
      <Nav />
      <Hero
        screenPercentage={66}
        overlayImgUrl='/images/liveoakfilms-logo-banner.png'
        videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0&autopause=0'
      />
      <PageSection
        bgColor={props => props.theme.colors.stone}
      >
        <SectionContainer textAlign='center'>
          <CustomContainer maxW='540px' pY='40px'>
            <h1>
              Love should be remembered.
            </h1>
            <Text pY='30px'>
              These are the memories that you want to last forever. This is the feeling that you don't want to forget. We are here to help you capture the best moments of your life because a love that is remembered is a <strong>love that leaves a legacy.</strong>
            </Text>
            <LinkButton text='Let us tell your story' themeColor='amber' href='inquire' />
          </CustomContainer>
        </SectionContainer>
      </PageSection>
      <PageSection
        bgColor={props => props.theme.colors.khaki}
      >
        <CustomContainer maxW='1200px' pX='20px' textAlign='center'>
          <VideoGallery filmCollections={pageContent.film_collections} />
          <LinkButton text='View More Films' themeColor='charcoal' href='portfolio' />
        </CustomContainer>
      </PageSection>
      <PageSection>
        <SectionContainer pY='80px'>
          <ReviewGallery reviews={pageContent.reviews} />
        </SectionContainer>
      </PageSection>
      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:1337/home')
  const pageContent = await res.json()
  return {
    props: {
      pageContent
    }
  }
}
