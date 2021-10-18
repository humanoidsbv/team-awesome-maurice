import React from "react";

import TimeEntry from "../time-entry/TimeEntry";
import TimeEntryDate from "../time-entry-date/TimeEntryDate";

export interface TimeEntryInterface {
  activity?: string;
  client?: string;
  date?: number;
  employer?: string;
  endTime?: string;
  id?: number;
  startTime?: string;
  timeFrom?: number;
  timeTo?: number;
}

interface TimeEntriesProps {
  fetchTimeEntries?: () => void;
  timeEntries: TimeEntryInterface[];
}

const TimeEntries = ({ fetchTimeEntries, timeEntries }: TimeEntriesProps) => {
  const timeZone = "nl-NL";
  const dateFormat = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  } as const;

  return (
    <>
      {timeEntries.map((timeEntry, i, array) => {
        const currentDate = new Date(timeEntry.startTime).toLocaleDateString(timeZone, dateFormat);
        const previousDate = new Date(array[i - 1]?.startTime).toLocaleDateString(
          timeZone,
          dateFormat,
        );
        const nextDate = new Date(array[i + 1]?.startTime).toLocaleDateString(timeZone, dateFormat);

        const isTop = currentDate === nextDate && currentDate !== previousDate;
        const isCenter = currentDate === nextDate && currentDate === previousDate;
        const isBottom = currentDate !== nextDate && currentDate === previousDate;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== previousDate) && (
              <TimeEntryDate startTime={timeEntry.startTime} />
            )}
            <TimeEntry
              fetchTimeEntries={fetchTimeEntries}
              isBottom={isBottom}
              isCenter={isCenter}
              isTop={isTop}
              timeEntry={timeEntry}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TimeEntries;
