import styled from 'styled-components'

const TextBlock = styled.p`
  color: ${props => props.primary ? "lightpink" : "lightblue"};
  font-family: sans-serif;
`

export default TextBlock