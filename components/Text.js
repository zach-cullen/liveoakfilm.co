import styled from 'styled-components'

const Text = styled.p`
  display: block;
  box-sizing: border-box;
  text-align: ${props => props.textAlign};
  padding-top: ${props => props.pY};
  padding-bottom: ${props => props.pY};
`

export default Text
