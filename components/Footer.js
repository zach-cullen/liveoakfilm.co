import styled from 'styled-components'
import SectionContainer from './SectionContainer'
import NavLogoSVG from './NavLogoSVG'
import LineBreak from './LineBreak'
import Link from 'next/link'

const StyledFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 0;
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
`

const Footer = () => (
  <StyledFooter>
    <SectionContainer pY='50px'>\
      <LogoWrapper>
        <NavLogoSVG fill='#fff' />
      </LogoWrapper>
      <LineBreak color='#fff' mT='50px' />
      <FooterNavGrid>
        <Link href='#home'>
          <StyledFooterLink>Home</StyledFooterLink>
        </Link>
        <Link href='#about'>
          <StyledFooterLink>About</StyledFooterLink>
        </Link>
        <Link href='#portfolio'>
          <StyledFooterLink>Portfolio</StyledFooterLink>
        </Link>
        <Link href='#contact'>
          <StyledFooterLink>Inquire</StyledFooterLink>
        </Link>
      </FooterNavGrid>
    </SectionContainer>
  </StyledFooter>
)

export default Footer
