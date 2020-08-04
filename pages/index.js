import Head from 'next/head'
import Hero from '../components/Hero'
import Button from '../components/Button'
import PageSection from '../components/PageSection'
import SectionContainer from '../components/SectionContainer'
import CustomContainer from '../components/CustomContainer'
import Text from '../components/Text'

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
        <PageSection
          bgColor={props => props.theme.colors.stone}
        >
          <SectionContainer textAlign='center'>
            <CustomContainer maxW='540px'>
              <h1>
                Love should be<br />
                remembered.
              </h1>
              <Text pY='30px'>
                These are the memories that you want to last forever. This is the feeling that you don't want to forget. We are here to help you capture the best moments of your life because a love that is remembered is a <strong>love that leaves a legacy.</strong>
              </Text>
            </CustomContainer>
            <Button>
              Making Your Film
            </Button>
          </SectionContainer>
        </PageSection>
        <PageSection
          bgColor={props => props.theme.colors.khaki}
        >
          <h2>See you later.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Auctor eu augue ut lectus arcu. Pharetra massa massa ultricies mi quis. Pretium lectus quam id leo in vitae turpis massa.</p>
        </PageSection>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
