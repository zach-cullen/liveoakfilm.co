import styled from 'styled-components'

const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: hsla(32, 29%, 35%, 40%);
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

const BackgroundVideoIframe = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  min-height: 70vh;
  min-width: 125vh;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -10%);
`

const Hero = ({ videoUrl }) => (
  // props videoUrl must be provided for video background to work.
  // must use player.vimeo address with params: '?background=1&autoplay=1&loop=1&byline=0&title=0' not public url
  <HeroDiv>
    <BackgroundVideoWrapper>
      <BackgroundVideoIframe
        src={videoUrl}
        frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen
      />
    </BackgroundVideoWrapper>
  </HeroDiv>
)

export default Hero
