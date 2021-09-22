import React from "react";

import * as Styled from "./TimeEntry.styled";
import TimeEntryDate from "./TimeEntry/TimeEntryDate";

interface TimeEntryProps {
  timeEntry: {
    id: number;
    client: string;
    startTimestamp: string;
    stopTimestamp: string;
  };
}

function TimeEntry({ timeEntry }: TimeEntryProps) {
  const startTime = new Date(timeEntry.startTimestamp);
  const formattedStartTime = startTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const stopTime = new Date(timeEntry.stopTimestamp);
  const formattedStopTime = stopTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <TimeEntryDate />
      <Styled.TimeEntry>
        <Styled.TimeEntryClient>{timeEntry.client}</Styled.TimeEntryClient>
        <Styled.TimeEntryTime>
          {formattedStartTime}
          <span> - </span>
          {formattedStopTime}
        </Styled.TimeEntryTime>
      </Styled.TimeEntry>
    </>
  );
}

export default TimeEntry;
