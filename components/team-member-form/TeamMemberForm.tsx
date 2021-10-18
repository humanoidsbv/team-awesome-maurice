import React, { useEffect, useState } from "react";
import { TeamMemberInterface } from "../../types/form-interfaces";

import * as Styled from "./TeamMemberForm.styled";

export interface TeamMemberFormProps {
  onSubmit: (newTeamMember: TeamMemberInterface) => void;
  teamMembers?: TeamMemberInterface[];
}

const TeamMemberForm = ({ onSubmit, teamMembers }: TeamMemberFormProps) => {
  const [newTeamMember, setNewTeamMember] = useState<TeamMemberInterface>({});

  useEffect(() => {
    setNewTeamMember({});
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit({
      currentEmployer: "Humanoids",
      employeeNumber: `HUM_00${teamMembers.length + 1}`,
      firstName: newTeamMember.firstName,
      lastName: newTeamMember.lastName,
      startingDate: "October 2021",
    });
    setNewTeamMember({});
  };

  return (
    <Styled.TeamMemberForm id="team-member-form" onSubmit={handleSubmit}>
      {/* id is used to access submit button in TeamMembersHeading component */}
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
            <Styled.InputElement
              id="firstName"
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.firstName ?? ""}
            />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="lastName">Last name</Styled.InputElementTitle>
            <Styled.InputElement
              id="lastName"
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.lastName ?? ""}
            />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="email">E-mail adress</Styled.InputElementTitle>
            <Styled.InputElement
              id="email"
              name="email"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.email ?? ""}
            />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="bio">Bio</Styled.InputElementTitle>
            <Styled.InputElement
              id="bio"
              name="bio"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.bio ?? ""}
            />
          </Styled.InputElementWrapper>
        </Styled.FormWrapperLeft>
        <Styled.FormWrapperRight>
          <Styled.InputElementWrapper>
            <Styled.InputElementTitle htmlFor="address">Address</Styled.InputElementTitle>
            <Styled.InputElement
              id="address"
              name="address"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.address ?? ""}
            />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="zipCode">Zipcode</Styled.InputElementTitle>
            <Styled.InputElement
              id="zipCode"
              name="zipCode"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.postalCode ?? ""}
            />
          </Styled.InputElementWrapper>
          <Styled.InputElementWrapper smallWidth>
            <Styled.InputElementTitle htmlFor="locality">City</Styled.InputElementTitle>
            <Styled.InputElement
              id="locality"
              name="locality"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.locality ?? ""}
            />
          </Styled.InputElementWrapper>
        </Styled.FormWrapperRight>
      </Styled.TeamMemberFormWrapper>
    </Styled.TeamMemberForm>
  );
};

export default TeamMemberForm;
