import React from "react";

import TimeEntry from "../time-entry/TimeEntry";
import TimeEntryDate from "../time-entry-date/TimeEntryDate";
import { TimeEntryInterface } from "./Interface";

interface TimeEntriesProps {
  timeEntries: TimeEntryInterface[];
}

function TimeEntries({ timeEntries }: TimeEntriesProps) {
  const timeZone = "nl-NL";
  const dateFormat = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  } as const;

  return (
    <>
      {timeEntries.map((timeEntry, i, array) => {
        const currentDate = new Date(timeEntry.startTimestamp).toLocaleDateString(
          timeZone,
          dateFormat,
        );
        const previousDate = new Date(array[i - 1]?.startTimestamp).toLocaleDateString(
          timeZone,
          dateFormat,
        );
        const nextDate = new Date(array[i + 1]?.startTimestamp).toLocaleDateString(
          timeZone,
          dateFormat,
        );

        const isTop = currentDate === nextDate && currentDate !== previousDate;
        const isCenter = currentDate === nextDate && currentDate === previousDate;
        const isBottom = currentDate !== nextDate && currentDate === previousDate;
        const standAlone = currentDate !== nextDate && currentDate !== previousDate;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== previousDate) && (
              <TimeEntryDate startTimestamp={timeEntry.startTimestamp} />
            )}
            <TimeEntry
              isBottom={isBottom}
              isCenter={isCenter}
              isTop={isTop}
              timeEntry={timeEntry}
              standAlone={standAlone}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default TimeEntries;
