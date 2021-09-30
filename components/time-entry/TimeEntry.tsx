import React from "react";

import * as Styled from "./TimeEntry.styled";
import { TimeEntryInterface } from "../time-entries/Interface";

export interface TimeEntryProps {
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
  standAlone: boolean;
  timeEntry: TimeEntryInterface;
}

function TimeEntry({ timeEntry, isBottom, isCenter, isTop, standAlone }: TimeEntryProps) {
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
    <Styled.TimeEntryWrapper
      isBottom={isBottom}
      isCenter={isCenter}
      isTop={isTop}
      standAlone={standAlone}
    >
      <Styled.TimeEntry
        isBottom={isBottom}
        isCenter={isCenter}
        isTop={isTop}
        standAlone={standAlone}
      >
        <Styled.TimeEntryClient>{timeEntry.client}</Styled.TimeEntryClient>
        <Styled.TimeEntryTime>
          {formattedStartTime}
          <span> - </span>
          {formattedStopTime}
        </Styled.TimeEntryTime>
      </Styled.TimeEntry>
    </Styled.TimeEntryWrapper>
  );
}

export default TimeEntry;
