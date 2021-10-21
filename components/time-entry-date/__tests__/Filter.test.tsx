import { formattedDate } from "../TimeEntryDate";

it("return a date string formatted with numering day and year, and a two-digit month", () => {
  const date = formattedDate("2020-03-10T16:30:00.000Z");
  expect(date).toBe("10-03-2020");
});
