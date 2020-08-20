import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import CloseSVG from './CloseSVG'

const ExpandTransition = styled.div`
  .expand--enter {
    opacity: 0;
    height: 0;
  }

  .expand--enter-active {
    opacity: 1;
    height: 100%;
    transition: height 0.5s ease-out, opacity 0.5s ease-out;
  }

  .expand--enter-done {
    opacity: 1;
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

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  background-color: hsla(0, 0%, 100%, 0.9);
`

const VideoIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
  border: none;
  padding: 20px;
`

const CloseButton = styled.div`
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 200;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 25px;
  background-color: #fff;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const VideoFullScreen = ({ show, closeVideoFullScreen, videoUrl }) => (
  <ExpandTransition>
    <CSSTransition
      in={show}
      timeout={500}
      classNames='expand-'
      unmountOnExit
    >
      <FullScreenOverlay>
        <CloseButton onClick={closeVideoFullScreen}>
          <CloseSVG fill='#303030' />
        </CloseButton>
        <VideoIFrame
          src={videoUrl + '?autoplay=1'}
          allow='autoplay; fullscreen'
          frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen
        />
      </FullScreenOverlay>
    </CSSTransition>
  </ExpandTransition>
)

export default VideoFullScreen
