import { getTimeEntries } from "../time-entries-api";

const mockedTimeEntries = [
  {
    activity: "testing",
    client: "Humanoids",
    endTime: "2020-03-10T16:30:00.000Z",
    id: 1,
    startTime: "2020-03-10T09:30:00.000Z",
  },
  {
    activity: "testing",
    client: "Humanoids",
    endTime: "2020-03-10T16:30:00.000Z",
    id: 2,
    startTime: "2020-03-10T09:30:00.000Z",
  },
  {
    activity: "testing",
    client: "Humanoids",
    endTime: "2020-03-10T16:30:00.000Z",
    id: 2,
    startTime: "2020-03-10T09:30:00.000Z",
  },
];

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
