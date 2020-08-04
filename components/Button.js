import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px 25px;
  margin: 10px 0;
  box-sizing: border-box;
  border: solid 2px ${props => props.theme.colors.amber};
  background-color: transparent;
  color: ${props => props.theme.colors.amber};
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  text-align: center;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.colors.amber};
  }

  &:focus {
    outline: none;
    border: solid 2px ${props => props.theme.colors.amber};
  }


`

export default Button
