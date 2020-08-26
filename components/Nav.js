import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomContainer from './CustomContainer'
import NavLinks from './NavLinks'
import NavLogoSVG from './NavLogoSVG'
import NavHamburger from './NavHamburger'
import NavMobileExpanded from './NavMobileExpanded'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const NavGrid = styled.nav`
  top: 0;
  width: 100%;
  padding: 20px 0;
  position: ${props => props.fixedNav ? 'fixed' : 'absolute'};
  z-index: 100;
  background-color: ${props => props.fixedNav ? props.theme.colors.stone : ''};
  box-shadow: ${props => props.fixedNav ? props.theme.effects.mdBoxShadow : ''};
  animation: ${props => props.fixedNav ? fadeIn : ''} 0.4s ease-in-out;
  color: ${props => props.fixedNav ? props.theme.colors.charcoal : '#fff'};
`

const NavContents = styled.div`
  display: grid;
  grid-template-columns: ${props => props.fixedNav ? '32px' : '50px'} 1fr;
  grid-template-areas: 'logo links';
`

const Nav = (props) => {
  const [fixedNav, setFixedNav] = useState(false)
  const [useMobileNav, setUseMobileNav] = useState(true)
  const [expandMobileNav, setExpandMobileNav] = useState(false)
  const toggleExpandMobileNav = () => setExpandMobileNav(prevState => !prevState)
  const windowWidthHandler = () => window.innerWidth > 600
  const renderLinksOrHamburger = () => useMobileNav ? <NavLinks fixedNav={fixedNav} /> : <NavHamburger handleClick={toggleExpandMobileNav} fill={fixedNav ? '#303030' : '#ffffff'} />
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setFixedNav(window.pageYOffset > 600)
    })
  }, [])
  useEffect(() => {
    setUseMobileNav(windowWidthHandler())
    window.addEventListener('resize', () => {
      setUseMobileNav(windowWidthHandler())
    })
  }, [])
  return (
    <>
      <NavMobileExpanded show={expandMobileNav} close={toggleExpandMobileNav} />
      <NavGrid fixedNav={fixedNav}>
        <CustomContainer maxW='1200px' pX='20px'>
          <NavContents fixedNav={fixedNav}>
            <Link href='/'>
              <a><NavLogoSVG fill={fixedNav ? '#ae804c' : '#ffffff'} /></a>
            </Link>
            {renderLinksOrHamburger()}
          </NavContents>
        </CustomContainer>
      </NavGrid>
    </>
  )
}

export default Nav
