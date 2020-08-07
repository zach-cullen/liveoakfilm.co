import styled from 'styled-components'

const VideoGrid = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: solid 10px #fff;
  display: grid;
  grid-template-columns: ${props => props.flipDirection ? '3fr 5fr' : '5fr 3fr'};
  grid-template-areas: '${props => props.flipDirection ? 'description video' : 'video description'}';
  margin-bottom: 60px;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);

  @media (max-width: 720px) {
    grid-template-areas: 
    'video video'
    'description description';
  }
`

const VideoBlock = styled.div`
  grid-area: video;
  padding-top: 52.6%;
  background-image: url('/images/ovca-georgiev/ovca-georgiev-21.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

const FeaturedVideo = (props) => {
  return (
    <VideoGrid flipDirection={props.flipDirection}>
      <VideoBlock />
      <VideoDescription>
        <h2>Kelsi & Kristian</h2>
        <h5>Blue Hill at Stone Barns</h5>
        <h4>
          “I  believe, in a way that makes me feel both grounded and free, that I love you — and that I always will.”
        </h4>
      </VideoDescription>
    </VideoGrid>
  )
}

export default FeaturedVideo
