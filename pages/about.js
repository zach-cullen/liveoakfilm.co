import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'
import Text from '../components/Text'
import LeafDetail from '../components/LeafDetail'
import ProcessCards from '../components/ProcessCards'
import Button from '../components/Button'
import TeamMembers from '../components/TeamMembers'

export default function About ({ pageContent }) {
  return (
    <>
      <Nav />
      <Hero
        screenPercentage={50}
        overlayImgUrl='/images/capture-more.png'
        videoUrl='https://player.vimeo.com/video/227477654?background=1&autoplay=1&loop=1&byline=0&title=0'
      />
      <PageSection>
        <CustomContainer textAlign='center' maxW='720px' pX='30px' pY='40px'>
          <h1>The Inspiration</h1>
          <Text pY='20px'>
            Our studio is named after one of nature’s great wonders: A beautiful and massive tree that grows for hundreds of years, outliving generations. We hope that your wedding film, too, will last for generations as a story of love that your legacy can be built on.
          </Text>
          <LeafDetail />
        </CustomContainer>
      </PageSection>
      <PageSection bgColor={props => props.theme.colors.khaki}>
        <CustomContainer maxW='1200px' pX='30px' pY='40px' textAlign='center'>
          <h1>The Process</h1>
          <ProcessCards />
          <Button themeColor='charcoal'>
            Let's get started
          </Button>
        </CustomContainer>
      </PageSection>
      <PageSection>
        <CustomContainer maxW='1200px' pX='30px' pY='40px' textAlign='center'>
          <h1>The Filmmakers</h1>
          <TeamMembers />
        </CustomContainer>
      </PageSection>
      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:1337/about')
  const pageContent = await res.json()
  return {
    props: {
      pageContent
    }
  }
}
