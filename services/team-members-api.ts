import { NotFoundError } from "./not-found-error"

export async function getTeamMembers() {
	return fetch("http://localhost:3004/team-members", {
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
};