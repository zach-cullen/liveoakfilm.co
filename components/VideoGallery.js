import styled from 'styled-components'

const VideoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 50px;
`

const VideoBlock = styled.div`
  display: block;
  padding-top: 56.25%;
  background-color: #fff;
`

const VideoDescription = styled.div`
  width: 100%;
  margin: 20px 0;

  h2 {
    margin-bottom: 4px;
  }

  h3 {
    margin-bottom: 16px;
  }
`

const VideoGallery = () => {
  return (
    <VideoGrid>
      <VideoBlock />
      <VideoDescription>
        <h2>Kelsi & Kristian</h2>
        <h3>Blue Hill at Stone Barns</h3>
        <h4>
          “I  believe — in a way that makes me feel both grounded and free — that I love you, and that I always will.”
        </h4>
      </VideoDescription>
    </VideoGrid>
  )
}

export default VideoGallery
