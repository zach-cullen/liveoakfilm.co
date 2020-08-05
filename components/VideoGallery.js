import styled from 'styled-components'
import Text from './Text'

const VideoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
`

const VideoBlock = styled.div`
  display: block;
  padding-top: 56.25%;
  background-color: #fff;
`

const VideoDescription = styled.div`
  width: 100%;
`

const VideoGallery = () => {
  return (
    <VideoGrid>
      <VideoBlock />
      <VideoDescription>
        <h2>Kelsi & Kristian</h2>
        <h4>NY | Blue Hill at Stone Barns</h4>
        <h3>
          “I  believe — in a way that makes me feel both grounded and free — that I love you, and that I always will.”
        </h3>
      </VideoDescription>
    </VideoGrid>
  )
}

export default VideoGallery
