import styled from 'styled-components'

const CardGrid = styled.div`
  width: 100%;
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
`

const ProcessCard = styled.div`
  min-height: 300px;
  background-color: #fff;
  box-shadow: ${props => props.theme.effects.mdBoxShadow};
`

const ProcessCards = () => (
  <CardGrid>
    <ProcessCard />
    <ProcessCard />
    <ProcessCard />
  </CardGrid>
)

export default ProcessCards
