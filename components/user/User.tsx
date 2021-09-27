import React from "react";

import * as Styled from "./User.styled";

function User() {
  return (
    <Styled.UserWrapper>
      <Styled.UserButton>
        <Styled.UserImage src="/icons/ruben.jpg" alt="user image" />
        <Styled.CompanyLogo src="/icons/humanoids-logo.svg" alt="company logo" />
      </Styled.UserButton>
      <Styled.ArrowDown src="/icons/arrow-down.svg" alt="collapsable menu" />
    </Styled.UserWrapper>
  );
}

export default User;
