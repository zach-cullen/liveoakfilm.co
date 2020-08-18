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
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.fixedNav ? props.theme.colors.charcoal : '#fff'};
`

const NavLinks = ({ fixedNav }) => (
  <NavLinksContainer>
    <Link href='#home' passHref>
      <StyledLink fixedNav={fixedNav}>Home</StyledLink>
    </Link>
  </NavLinksContainer>
)

export default NavLinks
