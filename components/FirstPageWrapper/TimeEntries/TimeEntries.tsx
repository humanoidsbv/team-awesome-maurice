import React from "react";

import TimeEntry from "./TimeEntry";

function TimeEntries({timeEntries}) {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntry timeEntry={timeEntry} key={timeEntry.id} />
      ))}
    </>
  );
}

export default TimeEntries;
