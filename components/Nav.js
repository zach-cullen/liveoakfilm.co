import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SectionContainer from './SectionContainer'
import NavLinks from './NavLinks'
import NavLogoSVG from './NavLogoSVG'

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
  grid-template-columns: ${props => props.fixedNav ? '30px' : '50px'} 1fr;
  grid-template-areas: 'logo links';
`

const Nav = (props) => {
  const [fixedNav, setFixedNav] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setFixedNav(window.pageYOffset > 600)
    })
  }, [])
  return (
    <NavGrid fixedNav={fixedNav}>
      <SectionContainer>
        <NavContents fixedNav={fixedNav}>
          <Link href='#logo'>
            <a><NavLogoSVG fill={fixedNav ? props => props.theme.colors.charcoal : '#ffffff'} height='30' /></a>
          </Link>
          <NavLinks fixedNav={fixedNav} />
        </NavContents>
      </SectionContainer>
    </NavGrid>
  )
}

export default Nav
