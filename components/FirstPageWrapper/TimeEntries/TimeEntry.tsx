import React from "react";

import * as Styled from "./TimeEntry.styled";
import { TimeEntryInterface } from "./Interface";

export interface TimeEntryProps {
  timeEntry: TimeEntryInterface;
  renderState: string;
}

function TimeEntry({ timeEntry, renderState }: TimeEntryProps) {
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
    <Styled.TimeEntry renderState={renderState}>
      <Styled.TimeEntryClient>{timeEntry.client}</Styled.TimeEntryClient>
      <Styled.TimeEntryTime>
        {formattedStartTime}
        <span> - </span>
        {formattedStopTime}
      </Styled.TimeEntryTime>
    </Styled.TimeEntry>
  );
}

export default TimeEntry;
