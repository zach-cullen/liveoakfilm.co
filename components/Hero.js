import styled from 'styled-components'
import { useEffect, useRef } from 'react'

const HeroDiv = styled.div`
  position: relative;
  z-index: -2;
  width: 100%;
  height: ${props => props.screenPercentage}vh;
`
const HeroContent = styled.div`
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;

  img {
    display: block;
    max-height: 100px;
    max-width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 720px) {
    width: 90%;
  }
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
  height: 80%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  background-image: url('/images/hero-mobile-fallback.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

const Hero = ({ videoUrl, screenPercentage, overlayImgUrl }) => {
  const backgroundRef = useRef(null)
  const applyParallax = (ref, parallaxRate) => {
    if (ref.current !== null) ref.current.style.top = `-${window.pageYOffset * parallaxRate}px`
  }
  useEffect(() => {
    document.addEventListener('scroll', () => applyParallax(backgroundRef, 0.5))
  }, [])
  return (
    <HeroDiv screenPercentage={screenPercentage}>
      <HeroContent>
        <img src={overlayImgUrl} />
      </HeroContent>
      <HeroOverlay>
        <BackgroundVideoWrapper
          ref={backgroundRef}
        >
          <BackgroundVideoIframe
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
