import React from "react";

import { TeamMemberInterface } from "../../services/form-interfaces";
import TeamMember from "../team-member/TeamMember";

interface TeamMembersProps {
  teamMembers: TeamMemberInterface[];
}

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
  return (
    <>
      {[...teamMembers].map((teamMember) => (
        <React.Fragment key={teamMember.id}>
          <TeamMember
            currentEmployer={teamMember.currentEmployer}
            employeeNumber={teamMember.employeeNumber}
            firstName={teamMember.firstName}
            lastName={teamMember.lastName}
            role={teamMember.role}
            startingDate={teamMember.startingDate}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default TeamMembers;
