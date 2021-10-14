import React, { useEffect, useState } from "react";

import { ErrorMessageProps } from "./index";
import { getTeamMembers, postTeamMembers } from "../services/team-members-api";
import { NotFoundError } from "../services/not-found-error";
import * as Styled from "../styles/PageWrapper.styled";
import Header from "../components/header/Header";
import Subheader from "../components/subheader/Subheader";
import TeamMemberForm from "../components/team-member-form/TeamMemberForm";
import TeamMembers from "../components/team-members/TeamMembers";
import TeamMembersHeading from "../components/team-members-heading/TeamMembersHeading";

const TeamMembersPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProps>();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const fetchTeamMembers = async () => {
    const response = await getTeamMembers();

    if (response instanceof NotFoundError) {
      setErrorMessage({
        error: "Oops... Something went wrong while loading your data 😭",
        submessage: "Please try again later, or contact your developer at developer@humanoids.nl",
        type: "error",
      });
      return;
    }

    if (response.length === 0) {
      setErrorMessage({
        error: "No entries have been found yet",
        submessage: "Enter your first Team Member 🙃",
        type: "empty",
      });
    }
    setTeamMembers(response);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const addNewTeamMember = async (newTeamMember: object) => {
    await postTeamMembers(newTeamMember);
    await fetchTeamMembers();
  };

  return (
    <>
      <Header />
      <Subheader title="Team members" description={`${teamMembers.length} humanoids`} />
      <Styled.PageWrapper>
        <TeamMembersHeading handleClick={handleClick} isOpen={isOpen} />
        {isOpen && <TeamMemberForm onSubmit={addNewTeamMember} />}
        <TeamMembers teamMembers={teamMembers} />
      </Styled.PageWrapper>
    </>
  );
};

export default TeamMembersPage;