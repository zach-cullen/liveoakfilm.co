import styled from 'styled-components'

const VideoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 3fr;
  column-gap: 50px;
  grid-template-areas: 
    'video description'
    'video description';

  @media (max-width: 720px) {
    grid-template-areas: 
    'video video'
    'description description';
  }
`

const VideoBlock = styled.div`
  grid-area: video;
  padding-top: 52.6%;
  box-sizing: border-box;
  border: solid 10px #fff;
  background-image: url('/images/ovca-georgiev/ovca-georgiev-21.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);
`

const VideoDescription = styled.div`
  grid-area: description;
  width: 100%;
  margin: 20px 0;

  h2 {
    margin-bottom: 4px;
  }

  h3 {
    margin-bottom: 16px;
  }

  @media (max-width: 720px) {
    text-align: center;
  }
`

const FeaturedVideo = () => {
  return (
    <VideoGrid>
      <VideoBlock />
      <VideoDescription>
        <h2>Kelsi & Kristian</h2>
        <h3>Blue Hill at Stone Barns</h3>
        <h4>
          “I  believe, in a way that makes me feel both grounded and free, that I love you — and that I always will.”
        </h4>
      </VideoDescription>
    </VideoGrid>
  )
}

export default FeaturedVideo
