import styled from 'styled-components'

const CustomContainer = styled.div`
  max-width: ${props => props.maxW};
  margin: 0 auto;
  padding: ${props => props.pY ? props.pY : 0} ${props => props.pX ? props.pX : 0};
  text-align: ${props => props.textAlign};
`

export default CustomContainer
