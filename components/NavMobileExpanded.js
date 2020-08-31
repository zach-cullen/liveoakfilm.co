import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import CloseSVG from './CloseSVG'

const ExpandedOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.charcoal};
  color: white;
`

const ExpandTransition = styled.div`
  .expand--enter {
    opacity: 0;
    width: 0;
  }

  .expand--enter-active {
    opacity: 1;
    width: 100%;
    transition: width 0.25s ease-out, opacity 0.35s ease-out;
  }

  .expand--enter-done {
    opacity: 1;
    width: 100%;
  }

  .expand--exit {
    opacity: 1;
  }

  .expand--exit-active {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .expand--exit-done {
    opacity: 0;
  }
`

const LinksContainer = styled.div`
  padding: 0 60px;
`

const CloseButton = styled.div`
  height: 60px;
`

const IconWrapper = styled.div`
  display: block;
  float: right;
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  padding: 15px;
`

const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  padding: 15px 0;

  h2 {
    color: ${props => props.theme.colors.stone};
    transition: color 0.1s;

    &:hover {
      color: ${props => props.theme.colors.amber};
    }
  }
`

const NavMobileExpanded = ({ show, close }) => (
  <ExpandTransition>
    <CSSTransition
      in={show}
      timeout={400}
      classNames='expand-'
      unmountOnExit
    >
      <ExpandedOverlay onClick={close}>
        <CloseButton>
          <IconWrapper>
            <CloseSVG fill='#fff' />
          </IconWrapper>
        </CloseButton>
        <LinksContainer>
          <Link href='/' passHref>
            <StyledLink>
              <h2>Home</h2>
            </StyledLink>
          </Link>
          <Link href='/about' passHref>
            <StyledLink>
              <h2>About</h2>
            </StyledLink>
          </Link>
          <Link href='/portfolio' passHref>
            <StyledLink>
              <h2>Portfolio</h2>
            </StyledLink>
          </Link>
          <Link href='/inquire' passHref>
            <StyledLink>
              <h2>Inquire</h2>
            </StyledLink>
          </Link>
        </LinksContainer>
      </ExpandedOverlay>
    </CSSTransition>
  </ExpandTransition>
)

export default NavMobileExpanded
