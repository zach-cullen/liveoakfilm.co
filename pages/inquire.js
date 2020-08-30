import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'

export default function Inquire ({ pageContent }) {
  return (
    <>
      <Nav />
      <Hero
        overlayImgUrl='/images/contact-header.png'
        screenPercentage={50}
        videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0'
      />
      <PageSection>
        <CustomContainer maxW='1200px' pX='30px' pY='30px' textAlign='center'>
          <h3>Wedding Inquiries:</h3>
        </CustomContainer>
      </PageSection>
      <Footer />
    </>
  )
}
