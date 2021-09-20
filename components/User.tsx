import * as Styled from "../styles/User.styled";

function User() {
    return (
        <>
        <Styled.UserWrapper>
            <Styled.CompanyLogo src="humanoids_logo.svg" alt="company logo"/>
            <Styled.UserImage src="ruben.jpg" alt="user img"/>
        </Styled.UserWrapper>
            <Styled.ArrowDown src="arrow-down.svg" alt="collapsable menu"/>
        </>
    )
};

export default User;