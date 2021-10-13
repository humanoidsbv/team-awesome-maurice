import React, { useState } from "react";

import * as Styled from "./TeamMember.styled";

interface TeamMemberProps {
  currentEmployer: string;
  employeeNumber: string;
  firstName: string;
  lastName: string;
  role: string;
  startingDate: string;
}

const TeamMember = ({
  currentEmployer,
  employeeNumber,
  firstName,
  lastName,
  role,
  startingDate,
}: TeamMemberProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Styled.TeamMember onClick={handleClick}>
      <Styled.PersonalInformationWrapper>
        <Styled.TeamMemberImage src="/icons/ruben.jpg" alt="Team member image" />
        <Styled.TeamMemberNameRoleWrapper>
          <Styled.Heading>{`${firstName} ${lastName}`}</Styled.Heading>
          <Styled.Heading subHeading>{role}</Styled.Heading>
        </Styled.TeamMemberNameRoleWrapper>
        <Styled.FatArrowDown src="/icons/fat-arrow-down.svg" alt="Collapsable button" />
      </Styled.PersonalInformationWrapper>
      <Styled.ExtraInformationWrapper isOpen={isCollapsed}>
        <Styled.ExtraInformationTitle>
          <p>{`Detailed information about ${firstName}`}</p>
        </Styled.ExtraInformationTitle>
        <Styled.ExtraInformation>
          <Styled.Heading>{employeeNumber}</Styled.Heading>
          <Styled.Heading subHeading>Employee number</Styled.Heading>
        </Styled.ExtraInformation>
        <Styled.ExtraInformation>
          <Styled.Heading>{currentEmployer}</Styled.Heading>
          <Styled.Heading subHeading>Current employer</Styled.Heading>
        </Styled.ExtraInformation>
        <Styled.ExtraInformation>
          <Styled.Heading>{startingDate}</Styled.Heading>
          <Styled.Heading subHeading>Starting date</Styled.Heading>
        </Styled.ExtraInformation>
      </Styled.ExtraInformationWrapper>
    </Styled.TeamMember>
  );
};

export default TeamMember;
