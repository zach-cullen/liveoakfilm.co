import styled from 'styled-components'
import Link from 'next/link'

const NavLinksContainer = styled.div`
  grid-area: links;
  height: 20px;
  margin: auto 0;
  text-align: right;
`

const StyledLink = styled.a`
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.fixedNav ? props.theme.colors.charcoal : '#fff'};
  margin-left: 24px;
`

const StyledNavButton = styled.a`
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.theme.colors.charcoal};
  margin-left: 24px;
  background-color: ${props => props.fixedNav ? props.theme.colors.khaki : '#fff'};
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.colors.amber};
  }
`

const NavLinks = ({ fixedNav }) => (
  <NavLinksContainer>
    <Link href='#home' passHref>
      <StyledLink fixedNav={fixedNav}>Home</StyledLink>
    </Link>
    <Link href='#about' passHref>
      <StyledLink fixedNav={fixedNav}>About</StyledLink>
    </Link>
    <Link href='#portfolio' passHref>
      <StyledLink fixedNav={fixedNav}>Portfolio</StyledLink>
    </Link>
    <Link href='#inquire' passHref>
      <StyledNavButton fixedNav={fixedNav}>Inquire</StyledNavButton>
    </Link>
  </NavLinksContainer>
)

export default NavLinks
