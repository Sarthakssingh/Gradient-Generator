// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  width: 120px;
  color: #000000;
  height: 40px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  cursor: pointer;
`

export const LiItem = styled.li`
  list-style-type: none;
`
