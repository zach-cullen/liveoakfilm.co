import styled from 'styled-components'
import { useEffect, useRef } from 'react'

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
// places centered, responsive logo on top of overlay
const HeroContent = styled.div`
  position: absolute;
  width: 50%;
  max-width: 360px;
  height: 33%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-image: url('/images/liveoakfilms-logo-banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

// a semi-transparent layer over background video to increase contrast for content
const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(39, 30%, 55%, 0.34);
`

// necessary wrapper for creating responsive child iframe
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

const Hero = ({ videoUrl, screenPercentage }) => {
  // create reference to be used by BackgroundVideoIframe
  const iframeRef = useRef(null)
  // sets css style top of ref as inline style in DOM as function of rate (decimal value 0 - 1) and the amount scrolled
  const applyParallax = (ref, parallaxRate) => {
    ref.current.style.top = `-${window.pageYOffset * parallaxRate}px`
  }
  useEffect(() => {
    // listens for scroll event and applies parallax effect to iFrame component
    document.addEventListener('scroll', () => {
      applyParallax(iframeRef, 0.5)
    })
  })

  return (
    // props videoUrl must be provided for video background to work.
    // must use player.vimeo address with params: '?background=1&autoplay=1&loop=1&byline=0&title=0' not public url
    // screenPercentage prop should be integer <= 100 and determines height of hero section as percentage of screen height
    <HeroDiv screenPercentage={screenPercentage}>
      <HeroContent />
      <HeroOverlay>
        <BackgroundVideoWrapper>
          <BackgroundVideoIframe
            ref={iframeRef}
            src={videoUrl}
            frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen
            screenPercentage={screenPercentage}
          />
        </BackgroundVideoWrapper>
      </HeroOverlay>
    </HeroDiv>
  )
}

export default Hero
