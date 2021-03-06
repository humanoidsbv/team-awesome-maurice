import { TimeEntryInterface } from "../types/form-interfaces";
import { NotFoundError } from "./not-found-error";

export async function getTimeEntries(): Promise<TimeEntryInterface[]> {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&order=asc`, {
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

export async function createTimeEntry(
  newTimeEntry: TimeEntryInterface,
): Promise<TimeEntryInterface[]> {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
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

export async function deleteTimeEntries(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
