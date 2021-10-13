import React from "react";

import * as Styled from "./TeamMembersHeading.styled";
import AddIcon from "../add-icon/AddIconWrapper";
import Button from "../button/Button";

interface TeamMembersHeadingProps {
	handleClick: () => void;
}

const TeamMembersHeading = ( { handleClick }: TeamMembersHeadingProps) => {
  return (
    <Styled.TitleWrapper>
      <Styled.TeamMembersTitle>All Humanoids</Styled.TeamMembersTitle>
      <Button buttonType="secondary" onClick={handleClick}>
        <AddIcon />
        New Humanoid
      </Button>
    </Styled.TitleWrapper>
  );
};

export default TeamMembersHeading;
