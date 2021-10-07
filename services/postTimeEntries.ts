import { TimeEntryInterface } from "../components/interface";

export class PostError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Something went wrong posting your entry.";
  }
}

export async function postTimeEntries(newTimeEntry: TimeEntryInterface): Promise<TimeEntryInterface[]> {
  return fetch("http://localhost:3004/time-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new PostError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
