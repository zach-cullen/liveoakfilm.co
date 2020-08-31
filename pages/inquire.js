import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'
import HoneybookContactForm from '../components/HoneybookContactForm'
import LeafDetail from '../components/LeafDetail'

export default function Inquire ({ pageContent }) {
  return (
    <>
      <Nav />
      <Hero
        overlayImgUrl='/images/contact-header.png'
        screenPercentage={50}
        videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0&autopause=0'
      />
      <PageSection>
        <CustomContainer maxW='1200px' pX='20px' pY='30px' textAlign='center'>
          <h3>Wedding Inquiries:</h3>
          <HoneybookContactForm />
          <h2>Thank You!</h2>
        </CustomContainer>
        <LeafDetail />
      </PageSection>
      <Footer />
    </>
  )
}
