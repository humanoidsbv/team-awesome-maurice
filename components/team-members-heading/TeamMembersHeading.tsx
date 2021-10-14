import React from "react";

import * as Styled from "./TeamMembersHeading.styled";
import AddIcon from "../add-icon/AddIconWrapper";
import Button from "../button/Button";

interface TeamMembersHeadingProps {
  handleClick: () => void;
  isOpen?: boolean;
}

const TeamMembersHeading = ({ handleClick, isOpen }: TeamMembersHeadingProps) => {
  return (
    <Styled.TitleWrapper>
      {!isOpen && (
        <>
          <Styled.TeamMembersTitle>All Humanoids</Styled.TeamMembersTitle>
          <Button primary onClick={handleClick}>
            <AddIcon />
            New Humanoid
          </Button>
        </>
      )}
      {isOpen && (
        <>
          <Styled.TeamMembersTitle>Add new team member</Styled.TeamMembersTitle>
          <Styled.ButtonWrapper>
            <Button secondary onClick={handleClick}>
              Cancel
            </Button>
            <Button primary desktopWidth form="team-member-form">
              Save
            </Button>
          </Styled.ButtonWrapper>
        </>
      )}
    </Styled.TitleWrapper>
  );
};

export default TeamMembersHeading;
