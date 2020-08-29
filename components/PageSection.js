import styled from 'styled-components'

const PageSection = styled.div`
  width: 100%;
  padding: ${props => props.pY ? props.pY : '60px'} 0;
  background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.stone};
`

export default PageSection
