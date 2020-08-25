import styled from 'styled-components'

const SectionContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${props => props.pY ? props.pY : '0'} 20px;
  text-align: ${props => props.textAlign};
`

export default SectionContainer
