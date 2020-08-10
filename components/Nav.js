import styled from 'styled-components'
import { useEffect, useState} from 'react'

const NavGrid = styled.nav`
  position: ${props => props.navPosition};
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.stone};
  box-shadow: ${props => props.theme.effects.mdBoxShadow};
`

const Nav = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const navPosition = scrollValue => scrollValue < 600 ? 'absolute' : 'fixed'
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollValue(window.pageYOffset)
    })
  })
  return (
    <NavGrid navPosition={navPosition(scrollValue)} />
  )
}

export default Nav
