import styled from 'styled-components'
import { useEffect, useRef } from 'react'

const NavGrid = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.stone};
  box-shadow: ${props => props.theme.effects.mdBoxShadow};
`

const Nav = () => {
  const navRef = useRef(null)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 600) {
        navRef.current.style.position = 'fixed';
      }
    })
  })
  return (
    <NavGrid ref={navRef} />
  )
}

export default Nav
