import React from "react";
import * as Styled from "../styles/User.styled";

function User() {
  return (
    <Styled.UserWrapper>
      <Styled.UserButton>
        <Styled.UserImage src="ruben.jpg" alt="user img" />
        <Styled.CompanyLogo src="humanoids-logo.svg" alt="company logo" />
      </Styled.UserButton>
      <Styled.ArrowDown src="arrow-down.svg" alt="collapsable menu" />
    </Styled.UserWrapper>
  );
}

export default User;
