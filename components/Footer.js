import styled from 'styled-components'
import SectionContainer from './SectionContainer'
import NavLogoSVG from './NavLogoSVG'
import LineBreak from './LineBreak'
import Link from 'next/link'

const StyledFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 0;
  color: #fff;
  background-color: ${props => props.theme.colors.charcoal};
`

const LogoWrapper = styled.div`
  width: 60px;
  margin: 0 auto;
`

const FooterNavGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    margin: 40px 0;
  }
`

const StyledFooterLink = styled.a`
  cursor: pointer;
  margin: 40px 0;
  text-align: center;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  @media (max-width: 720px) {
    margin: 20px 0;
  }
`

const FooterFinePrint = styled.h4`
  margin-top: 80px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.2s;

  a {
    letter-spacing: 0.1em;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <SectionContainer pY='50px'>\
      <LogoWrapper>
        <NavLogoSVG fill='#fff' />
      </LogoWrapper>
      <LineBreak color='#fff' mT='50px' />
      <FooterNavGrid>
        <Link href='/'>
          <StyledFooterLink>Home</StyledFooterLink>
        </Link>
        <Link href='about'>
          <StyledFooterLink>About</StyledFooterLink>
        </Link>
        <Link href='portfolio'>
          <StyledFooterLink>Portfolio</StyledFooterLink>
        </Link>
        <Link href='inquire'>
          <StyledFooterLink>Inquire</StyledFooterLink>
        </Link>
      </FooterNavGrid>
      <FooterFinePrint>
        Copyright 2020, Live Oak Films, LLC
        <br />
        <Link href='#a'>Privacy Policy</Link> | <Link href='#b'>Terms & Conditions</Link>
      </FooterFinePrint>
    </SectionContainer>
  </StyledFooter>
)

export default Footer
