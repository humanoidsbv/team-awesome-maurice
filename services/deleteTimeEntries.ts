export class DeleteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Something went wrong deleting your entry.";
  }
}

export async function deleteTimeEntries(id: number) {
	return fetch(`http://localhost:3004/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
	}).then((response) => {
		if (response.status !== 200) {
			throw new DeleteError(response.toString());
		}

		return response;
	})
		.then(response => response.json())
		.catch((error) => error);
};

