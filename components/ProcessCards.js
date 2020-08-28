import styled from 'styled-components'
import Text from '../components/Text'

const CardGrid = styled.div`
  width: 100%;
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ProcessCard = styled.div`
  box-sizing: border-box;
  padding: 60px 30px;
  background-color: #fff;
`

const CardTitle = styled.h2`
  margin-bottom: 30px;
`

const CardText = styled.h4`
  display: block;
  font-size: 20px;
  text-align: left;
`

const ProcessCards = () => (
  <CardGrid>
    <ProcessCard>
      <CardTitle>1. Tell us your story.</CardTitle>
      <CardText>
        Tell us about the people you love and the moments you can't wait for. Then, we'll work together to make sure your event timeline flows effortlessly.
      </CardText>
    </ProcessCard>
    <ProcessCard>
      <CardTitle>2. Have the best day.</CardTitle>
      <CardText>
        Our first priority is that you get to enjoy and take in your special day. We promise that if you're having fun then we are absolutely making a great video.
      </CardText>
    </ProcessCard>
    <ProcessCard>
      <CardTitle>3. Laugh, cry, share.</CardTitle>
      <CardText>
        We aim to let your moments speak for themselves. Your film will capture the full range of emotion from silly to sappy and everything inbetween.
      </CardText>
    </ProcessCard>
  </CardGrid>
)

export default ProcessCards
