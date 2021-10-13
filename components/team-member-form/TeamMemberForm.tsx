import React from "react";

import * as Styled from "./TeamMemberForm.styled";

const TeamMemberForm = () => {
  return (
    <Styled.TeamMemberForm>
      <Styled.TeamMemberFormWrapper>
        <Styled.TitleWrapper>
          <Styled.Title>Personal details</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.AvatarWrapper>
          <Styled.Avatar src="/icons/ruben.jpg" alt="User avatar" />
          <Styled.ChangeAvatarOption>Edit Avatar</Styled.ChangeAvatarOption>
        </Styled.AvatarWrapper>
        <Styled.FormWrapperLeft>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="firstName">First name</Styled.InputElementTitle>
            <Styled.InputElement id="firstName" name="firstName" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="lastName">Last name</Styled.InputElementTitle>
            <Styled.InputElement id="lastName" name="lastName" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="email">E-mail adress</Styled.InputElementTitle>
            <Styled.InputElement id="email" name="email" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="bio">Bio</Styled.InputElementTitle>
            <Styled.InputElement id="bio" name="bio" required type="text" />
          </Styled.InputElementWrapper>
        </Styled.FormWrapperLeft>
        <Styled.FormWrapperRight>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="address">Address</Styled.InputElementTitle>
            <Styled.InputElement id="address" name="address" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="zipCode">Zipcode</Styled.InputElementTitle>
            <Styled.InputElement id="zipCode" name="zipCode" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="city">City</Styled.InputElementTitle>
            <Styled.InputElement id="city" name="city" required type="text" />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="social">Social Profiles</Styled.InputElementTitle>
            <Styled.InputElement />
            <Styled.InputElement />
          </Styled.InputElementWrapper>
        </Styled.FormWrapperRight>
      </Styled.TeamMemberFormWrapper>
    </Styled.TeamMemberForm>
  );
};

export default TeamMemberForm;
