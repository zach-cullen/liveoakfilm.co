import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'

export default function Portfolio ({ pageContent }) {
  return (
    <>
      <Nav noHero />
      <PageSection pY='40px' />
      <PageSection>
        <CustomContainer maxW='1200px' pX='30px' textAlign='center'>
          <h1>Let's Chat</h1>
        </CustomContainer>
      </PageSection>
      <Footer />
    </>
  )
}