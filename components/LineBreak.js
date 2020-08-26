import styled from 'styled-components'

const LineBreak = styled.div`
  width: 100%;
  border-bottom: solid 1px ${props => props.themeColor ? props.theme.colors[props.themeColor] : props.color ? props.color : '#000'};
  margin-top: ${props => props.mT};
  margin-bottom: ${props => props.mB};
`

export default LineBreak
