import React from 'react';
import * as Styled from './TimeEntryDate.styled';

interface EntryDateProps {
  startTimestamp: string;
}

function TimeEntryDate({ startTimestamp }: EntryDateProps) {
  const date = new Date(startTimestamp);
  
  const formattedDate = date.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric'
  })

  return <Styled.TimeEntryDate>{formattedDate}</Styled.TimeEntryDate>
}

export default TimeEntryDate;
