import { NotFoundError } from "./not-found-error";

export async function getClients() {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/clients`, {
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
