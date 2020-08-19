import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const ExpandedOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.amber};
  color: white;
`

const ExpandTransition = styled.div`
  .expand--enter {
    opacity: 0;
    width: 0;
  }

  .expand--enter-active {
    opacity: 1;
    width: 100%;
    transition: width 0.25s ease-out, opacity 0.35s ease-out;
  }

  .expand--enter-done {
    opacity: 1;
    width: 100%;
  }

  .expand--exit {
    opacity: 1;
    /* width: 1; */
  }

  .expand--exit-active {
    opacity: 0;
    /* width: 0; */
    transition: opacity 0.2s ease-out;
  }

  .expand--exit-done {
    opacity: 0;
    /* width: 0; */
  }
`

const NavMobileExpanded = (props) => (
  <ExpandTransition>
    <CSSTransition
      in={props.inProp}
      timeout={400}
      classNames='expand-'
      unmountOnExit
    >
      <ExpandedOverlay onClick={props.handleClick} />
    </CSSTransition>
  </ExpandTransition>
)

export default NavMobileExpanded