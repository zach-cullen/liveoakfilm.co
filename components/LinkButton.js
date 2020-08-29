import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.a`
  cursor: pointer;
  display: block;
  width: max-content;
  padding: 20px 25px;
  margin: 10px auto;
  box-sizing: border-box;
  border: solid 2px ${props => props.theme.colors[props.themeColor]};
  background-color: transparent;
  color: ${props => props.theme.colors[props.themeColor]};
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  text-align: center;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.colors[props.themeColor]};
  }

  &:focus {
    outline: none;
    border: solid 2px ${props => props.theme.colors[props.themeColor]};
  }
`

const LinkButton = ({ themeColor, text, href }) => (
  <Link href={href} passHref>
    <Button themeColor={themeColor}>
      {text}
    </Button>
  </Link>
)

export default LinkButton
