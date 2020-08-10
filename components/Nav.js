import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const NavGrid = styled.nav`
  position: ${props => props.navPosition};
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.navPosition === 'fixed' ? props.theme.colors.stone : 'transparent'};
  box-shadow: ${props => props.navPosition === 'fixed' ? props.theme.effects.mdBoxShadow : ''};
  animation: ${props => props.navPosition === 'fixed' ? fadeIn : ''} 0.4s ease-in-out;
`

const Nav = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const navPosition = scrollValue => scrollValue < 600 ? 'absolute' : 'fixed'
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollValue(window.pageYOffset)
    })
  }, [])
  return (
    <NavGrid navPosition={navPosition(scrollValue)} />
  )
}

export default Nav
