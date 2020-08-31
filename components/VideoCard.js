import styled from 'styled-components'
import PlayIconSVG from './PlayIconSVG'

const VideoGrid = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: solid 10px #fff;
  display: grid;
  grid-template-columns: ${props => props.flipDirection ? '3fr 5fr' : '5fr 3fr'};
  grid-template-areas: '${props => props.flipDirection ? 'description video' : 'video description'}';
  margin-bottom: 60px;
  box-shadow: ${props => props.theme.effects.mdBoxShadow};

  @media (max-width: 720px) {
    grid-template-areas: 
    'video video'
    'description description';
  }
`

const VideoBlock = styled.div`
  grid-area: video;
  width: 100%;
  min-height: 300px;
  background-image: url('${props => props.coverImageURL}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const PlayButton = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  filter: drop-shadow(0px 0px 20px #505050);
  transition: opacity 0.1s;

  &:hover {
    opacity: 1.0;
  }
`

const VideoDescription = styled.div`
  grid-area: description;
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  h2 {
    margin-bottom: 4px;
  }
  h5 {
    margin-bottom: 16px;
  }
  @media (max-width: 720px) {
    text-align: center;
  }
`

const VideoCard = ({ filmCollection, flipDirection, showVideoFullScreen, setSelectedVideoUrl }) => {
  const handlePlayButtonClick = () => {
    showVideoFullScreen()
    setSelectedVideoUrl(filmCollection.videoUrl)
  }

  return (
    <VideoGrid flipDirection={flipDirection}>
      <VideoBlock coverImageURL={filmCollection.videoCover.formats.medium.url}>
        <PlayButton onClick={handlePlayButtonClick}>
          <PlayIconSVG fill='#ffffff' />
        </PlayButton>
      </VideoBlock>
      <VideoDescription>
        <h2>{filmCollection.title}</h2>
        <h5>{filmCollection.venue}</h5>
        <h4>{filmCollection.quote}</h4>
      </VideoDescription>
    </VideoGrid>
  )
}

export default VideoCard
