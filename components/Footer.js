import styled from 'styled-components'
import SectionContainer from './SectionContainer'
import NavLogoSVG from './NavLogoSVG'

const StyledFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 0;
  background-color: ${props => props.theme.colors.charcoal};
`

const LogoWrapper = styled.div`
  width: 60px;
  margin: 0 auto;
`

const Footer = () => (
  <StyledFooter>
    <SectionContainer pY='50px'>\
      <LogoWrapper>
        <NavLogoSVG fill='#fff' />
      </LogoWrapper>
    </SectionContainer>
  </StyledFooter>
)

export default Footer
