import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: ${props => props.theme.effects.mdBoxShadow};
`

export default Nav
