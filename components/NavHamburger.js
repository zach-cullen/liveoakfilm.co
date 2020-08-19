import styled from 'styled-components'
import MenuIconSVG from './MenuIconSVG'

const HamburgerContainer = styled.div`
  cursor: pointer;
  grid-area: links;
  width: 32px;
  margin-left: auto;
  opacity: 0.8;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1.0;
  }
`

const NavHamburger = (props) => (
  <HamburgerContainer onClick={props.handleClick}>
    <MenuIconSVG fill={props.fill} />
  </HamburgerContainer>
)

export default NavHamburger
