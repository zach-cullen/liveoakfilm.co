import styled from 'styled-components'

const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.amber.hex};
  color: white;a
  text-align: center;
`

export default Button
