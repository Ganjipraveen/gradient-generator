import {Component} from 'react'

import {
  MainContainer,
  MainHeading,
  ChooseDirection,
  GradientDirectionItemList,
  PickColors,
  InputContainer,
  InputHolder,
  LabelElement,
  InputElement,
  GenerateButton,
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
    activeTab: gradientDirectionsList[0].value,
    input1: '#8ae323',
    input2: '#014f7b',
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
  }

  changeInput1 = event => {
    this.setState({input1: event.target.value})
  }

  changeInput2 = event => {
    this.setState({input2: event.target.value})
  }

  generateColor = () => {
    const {input1, input2} = this.state
    this.setState({
      bgColor1: input1,
      bgColor2: input2,
    })
  }

  onClickButton = value => {
    this.setState({activeTab: value})
  }

  render() {
    const {activeTab, input1, input2, bgColor1, bgColor2} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        linearGradient={`to ${activeTab}, ${bgColor1}, ${bgColor2}`}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ChooseDirection>Choose direction</ChooseDirection>
        <GradientDirectionItemList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientItem={eachItem}
              activeTab={activeTab}
              onClickButton={this.onClickButton}
            />
          ))}
        </GradientDirectionItemList>
        <PickColors>Pick the colors</PickColors>
        <InputContainer>
          <InputHolder>
            <LabelElement htmlFor="input1">{input1}</LabelElement>
            <InputElement
              id="input1"
              type="color"
              value={input1}
              onChange={this.changeInput1}
            />
          </InputHolder>
          <InputHolder>
            <LabelElement htmlFor="input2">{input2}</LabelElement>
            <InputElement
              id="input2"
              type="color"
              value={input2}
              onChange={this.changeInput2}
            />
          </InputHolder>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateColor}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}
export default GradientGenerator
