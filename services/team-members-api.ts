import { NotFoundError } from "./not-found-error";
import { TeamMemberInterface } from "../types/form-interfaces";

export async function getTeamMembers() {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function createTeamMember(newTeamMember: TeamMemberInterface) {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
