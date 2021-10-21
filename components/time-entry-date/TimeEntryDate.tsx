import React from "react";
import * as Styled from "./TimeEntryDate.styled";

interface TimeEntryDateProps {
  startTime: string;
}

export const formattedDate = (string: string) => {
  const date = new Date(string);

  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });
};

const TimeEntryDate = ({ startTime }: TimeEntryDateProps) => {
  return <Styled.TimeEntryDate>{formattedDate(startTime)}</Styled.TimeEntryDate>;
};

export default TimeEntryDate;
