import React from "react";

import { TimeEntryInterface } from "../../types/form-interfaces";
import TimeEntry from "../time-entry/TimeEntry";
import TimeEntryDate from "../time-entry-date/TimeEntryDate";

interface TimeEntriesProps {
  fetchTimeEntries?: () => void;
  filteredTimeEntries?: TimeEntryInterface[];
}

const TimeEntries = ({ fetchTimeEntries, filteredTimeEntries }: TimeEntriesProps) => {
  const timeZone = "nl-NL";
  const dateFormat = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  } as const;

  return (
    <>
      {filteredTimeEntries.map((timeEntry, i, array) => {
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
