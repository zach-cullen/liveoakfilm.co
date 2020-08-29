import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'

export default function Portfolio ({ pageContent }) {
  return (
    <>
      <Nav />
      <PageSection />
      <PageSection bgColor={props => props.theme.colors.khaki}>
        <CustomContainer maxW='1200px' pX='30px'>
          <h1>Portfolio</h1>
        </CustomContainer>
      </PageSection>
      <Footer />
    </>
  )
}
