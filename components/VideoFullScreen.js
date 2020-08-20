import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

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
  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 50.85vw;
  box-sizing: border-box;
  border: solid 10px #fff;
  background-color: #fff;
`

const VideoFullScreen = ({ show, closeVideoFullScreen, videoUrl }) => (
  <>
    <ExpandTransition>
      <CSSTransition
        in={show}
        timeout={500}
        classNames='expand-'
        unmountOnExit
      >
        <FullScreenOverlay onClick={closeVideoFullScreen}>
          <VideoIFrame
            src={videoUrl + '?autoplay=1'}
            allow='autoplay'
            frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen
          />
        </FullScreenOverlay>
      </CSSTransition>
    </ExpandTransition>
  </>
)

export default VideoFullScreen
