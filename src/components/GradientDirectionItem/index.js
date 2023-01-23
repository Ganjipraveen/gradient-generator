import {ListItem, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeTab, gradientItem, onClickButton} = props
  const {value, displayText} = gradientItem
  const buttonClick = () => {
    onClickButton(value)
  }
  const isTrue = activeTab === value

  return (
    <ListItem>
      <ButtonItem
        as="button"
        type="button"
        onClick={buttonClick}
        isTrue={isTrue}
      >
        {displayText}
      </ButtonItem>
    </ListItem>
  )
}
export default GradientDirectionItem
