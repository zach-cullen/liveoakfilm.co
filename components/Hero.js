import styled from 'styled-components'
import { useEffect, useRef } from 'react'

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
const HeroContent = styled.div`
  position: absolute;
  width: 50%;
  max-width: 300px;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-image: url('/images/liveoakfilms-logo-banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
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
  const iframeRef = useRef(null)
  const applyParallax = (ref, parallaxRate) => {
    if (ref.current !== null) ref.current.style.top = `-${window.pageYOffset * parallaxRate}px`
  }
  useEffect(() => {
    document.addEventListener('scroll', () => applyParallax(iframeRef, 0.5))
  }, [])
  return (
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
