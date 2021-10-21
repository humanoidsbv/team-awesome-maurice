import { getTimeEntries } from "../time-entries-api";
import { mockedTimeEntries } from "../../__mocks__/mockedTimeEntries";

it("fetches TimeEntries from the server", () => {
  const mockJsonPromise = Promise.resolve(mockedTimeEntries);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  getTimeEntries();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&order=asc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
});
