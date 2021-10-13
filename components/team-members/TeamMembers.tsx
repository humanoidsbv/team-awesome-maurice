import React from "react";

import { TeamMemberInterface } from "../interface";
import TeamMember from "../team-member/TeamMember";

interface TeamMembersProps {
  teamMembers: TeamMemberInterface[];
}

const TeamMembers = ( { teamMembers }: TeamMembersProps) => {
  return (
    <>
      {[...teamMembers].map((teamMember) => (
        <TeamMember
          currentEmployer={teamMember.currentEmployer}
          employeeNumber={teamMember.employeeNumber}
          firstName={teamMember.firstName}
          lastName={teamMember.lastName}
          role={teamMember.role}
          startingDate={teamMember.startingDate}
        />
      ))}
    </>
  );
};

export default TeamMembers;
