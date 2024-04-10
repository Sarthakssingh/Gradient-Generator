import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Para,
  ButtonsContainer,
  GenerateButton,
  ColorValuesContainer,
  ColorInputsContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onGenerateGradient = () => {
    const {direction, firstColor, secondColor} = this.state
    this.setState({
      gradientValue: `to ${direction}, ${firstColor}, ${secondColor}`,
    })
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  render() {
    const {direction, firstColor, secondColor, gradientValue} = this.state
    const stylee = {
      border: 'none',
      width: '150px',
      height: '50px',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      marginLeft: '10px',
    }

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ButtonsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              gradientButtonDetails={eachItem}
              key={eachItem.directionId}
              onChangeDirection={this.onChangeDirection}
              active={eachItem.value === direction}
            />
          ))}
        </ButtonsContainer>
        <Para>Pick the Colors</Para>
        <ColorValuesContainer>
          <Para>{firstColor}</Para>
          <Para>{secondColor}</Para>
        </ColorValuesContainer>
        <ColorInputsContainer>
          <input
            type="color"
            value={firstColor}
            onChange={this.onChangeFirstColor}
            style={stylee}
          />
          <input
            type="color"
            value={secondColor}
            onChange={this.onChangeSecondColor}
            style={stylee}
          />
        </ColorInputsContainer>
        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
