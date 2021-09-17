import * as Styled from "../styles/NavigationButton.styled";

function NavigationButton({isClosed, isActive, onClick}) {
    return (
        <Styled.NavigationButton isClosed={isClosed} isActive={isActive} onClick={onClick} />
    )
}

export default NavigationButton;