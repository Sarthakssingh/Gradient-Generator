// Write your code here

import {Button, LiItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientButtonDetails, onChangeDirection, active} = props
  const {displayText, value} = gradientButtonDetails
  const onClickDirectionItem = () => {
    onChangeDirection(value)
  }

  return (
    <LiItem>
      <Button type="button" active={active} onClick={onClickDirectionItem}>
        {displayText}
      </Button>
    </LiItem>
  )
}

export default GradientDirectionItem
