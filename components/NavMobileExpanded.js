import styled from 'styled-components'

const ExpandedOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.amber};
  color: white;
  font-family: 
  opacity: 0.9;
`
const NavMobileExpanded = (props) => (
  <ExpandedOverlay onClick={props.handleClick}>
    NAV
  </ExpandedOverlay>
)

export default NavMobileExpanded
