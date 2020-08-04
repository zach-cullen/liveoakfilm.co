import styled from 'styled-components'

const VideoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 36px;
`

const VideoBlock = styled.div`
  padding-top: 56.25%;
  background-color: #fff;
`

const VideoGallery = () => {
  return (
    <VideoGrid>
      <VideoBlock />
      <VideoBlock />
      <VideoBlock />
      <VideoBlock />
    </VideoGrid>
  )
}

export default VideoGallery
