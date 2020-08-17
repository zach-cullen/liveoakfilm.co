import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const NavGrid = styled.nav`
  top: 0;
  width: 100%;
  height: 50px;
  position: ${props => props.fixedNav ? 'fixed' : 'absolute'};
  background-color: ${props => props.fixedNav ? props.theme.colors.stone : ''};
  box-shadow: ${props => props.fixedNav ? props.theme.effects.mdBoxShadow : ''};
  animation: ${props => props.fixedNav ? fadeIn : ''} 0.4s ease-in-out;
  color: ${props => props.fixedNav ? props.theme.colors.charcoal : '#fff'};

  @media (max-width: 720px) {
    position: fixed;
    background-color: #fff;
    height: 72px;
    top: ${props => props.windowHeight - 72}px};
    color: ${props => props.theme.colors.charcoal};
    animation: '';
  }
`

const NavContents = () => (
  <>
    Navigation Contents
  </>
)

const Nav = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const fixedNav = scrollValue => scrollValue > 600
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollValue(window.pageYOffset)
    })
  }, [])
  useEffect(() => {
    setWindowHeight(window.innerHeight)
  })
  return (
    <NavGrid fixedNav={fixedNav(scrollValue)} windowHeight={windowHeight}>
      <NavContents />
    </NavGrid>
  )
}

export default Nav
