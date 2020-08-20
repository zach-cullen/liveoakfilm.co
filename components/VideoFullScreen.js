import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 150;
`

const ExpandTransition = styled.div`
  .expand--enter {
    opacity: 0;
    height: 0;
  }

  .expand--enter-active {
    opacity: 0.9;
    height: 100%;
    transition: height 0.4s ease-out, opacity 0.4s ease-out;
  }

  .expand--enter-done {
    opacity: 0.9;
    height: 100%;
  }

  .expand--exit {
    opacity: 0.9;
  }

  .expand--exit-active {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .expand--exit-done {
    opacity: 0;
  }
`

const VideoFullScreen = ({ show, closeClickHandler }) => (
  <ExpandTransition>
    <CSSTransition
      in={show}
      timeout={500}
      classNames='expand-'
      unmountOnExit
    >
      <FullScreenOverlay onClick={closeClickHandler} />
    </CSSTransition>
  </ExpandTransition>
)

export default VideoFullScreen
