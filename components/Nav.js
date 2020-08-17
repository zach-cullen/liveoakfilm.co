import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
import SectionContainer from './SectionContainer'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const NavGrid = styled.nav`
  top: 0;
  width: 100%;
  padding: 20px 0;
  position: ${props => props.fixedNav ? 'fixed' : 'absolute'};
  background-color: ${props => props.fixedNav ? props.theme.colors.stone : ''};
  box-shadow: ${props => props.fixedNav ? props.theme.effects.mdBoxShadow : ''};
  animation: ${props => props.fixedNav ? fadeIn : ''} 0.4s ease-in-out;
  color: ${props => props.fixedNav ? props.theme.colors.charcoal : '#fff'};
`

const NavContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'logo links';
`

const NavLogo = styled.div`
  grid-area: logo;
  height: ${props => props.fixedNav ? '30px' : '50px'};
  width: 50px;
  background-image: url('/images/lo-logo-white.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const Nav = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const fixedNav = scrollValue => scrollValue > 600
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollValue(window.pageYOffset)
    })
  }, [])
  return (
    <NavGrid fixedNav={fixedNav(scrollValue)}>
      <SectionContainer>
        <NavContents>
          <NavLogo fixedNav={fixedNav(scrollValue)} />
        </NavContents>
      </SectionContainer>
    </NavGrid>
  )
}

export default Nav
