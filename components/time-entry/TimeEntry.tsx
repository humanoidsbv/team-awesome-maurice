import React from "react";

import * as Styled from "./TimeEntry.styled";
import { TimeEntryInterface } from "../interface";
import { deleteTimeEntries } from "../../services/delete-time-entries";
import { DeleteButton } from "../delete-button/DeleteButton";

export interface TimeEntryProps {
  fetchTimeEntries?: () => void;
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
  timeEntry: TimeEntryInterface;
}

const TimeEntry = ({ fetchTimeEntries, isBottom, isCenter, isTop, timeEntry }: TimeEntryProps) => {
  const startTime = new Date(timeEntry.startTime);
  const formattedStartTime = startTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const stopTime = new Date(timeEntry.endTime);
  const formattedStopTime = stopTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDelete = async () => {
    await deleteTimeEntries(timeEntry.id);
    fetchTimeEntries();
  };

  return (
    <Styled.TimeEntryWrapper isBottom={isBottom} isCenter={isCenter} isTop={isTop}>
      <Styled.TimeEntry isBottom={isBottom} isCenter={isCenter} isTop={isTop}>
        <Styled.TimeEntryClient>{timeEntry.client}</Styled.TimeEntryClient>
        <DeleteButton onClick={handleDelete} />
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
