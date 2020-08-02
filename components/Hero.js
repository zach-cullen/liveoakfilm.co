import styled from 'styled-components'

// background-image sits beneath video overlay as fallback in unsupported mobile browsers
const HeroDiv = styled.div`
  position: relative;
  z-index: -2;
  width: 100%;
  height: ${props => props.screenPercentage}vh;
  background-image: url('/images/hero-mobile-fallback.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsla(39, 30%, 55%, 0.34);
`

const BackgroundVideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
`

// min-height calculation creates necessary slightly oversize
// height and min-width calculations assume 16:9 aspect ratio
const BackgroundVideoIframe = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  min-height: ${props => props.screenPercentage * 1.16}vh; 
  min-width: ${props => props.screenPercentage * 1.16 * 1.78}vh;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -10%);
`

const Hero = ({ videoUrl, screenPercentage }) => (
  // props videoUrl must be provided for video background to work.
  // must use player.vimeo address with params: '?background=1&autoplay=1&loop=1&byline=0&title=0' not public url
  // screenPercentage prop should be integer <= 100 and determines height of hero section as percentage of screen height
  <HeroDiv screenPercentage={screenPercentage}>
    <HeroOverlay>
      <BackgroundVideoWrapper>
        <BackgroundVideoIframe
          src={videoUrl}
          frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen
          screenPercentage={screenPercentage}
        />
      </BackgroundVideoWrapper>
    </HeroOverlay>
  </HeroDiv>
)

export default Hero
