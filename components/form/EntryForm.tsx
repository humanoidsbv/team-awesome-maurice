import React, { useState } from "react";

import * as Styled from "./EntryForm.styled";
import Button from "../button/Button";
import { TimeEntryInterface } from "../time-entries/Interface";

export interface EntryFormProps {
  onClose?: () => void;
}

function EntryForm({ onClose }: EntryFormProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntryInterface>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    event.preventDefault();
  };

  const handleSubmit = () => {
    setNewTimeEntry({});
  };

  return (
    <Styled.EntryFormWrapper onSubmit={handleSubmit}>
      <Styled.FormClose src="/icons/close.svg" alt="close button" onClick={onClose} />
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="employer">EMPLOYER</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="employer"
          name="employer"
          type="text"
          value={newTimeEntry.employer ?? ""}
          onChange={handleChange}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="activity">ACTIVITY</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="activity"
          name="activity"
          type="text"
          value={newTimeEntry.activity ?? ""}
          onChange={handleChange}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="date">Date</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="date"
          name="date"
          type="date"
          value={newTimeEntry.date ?? ""}
          onChange={handleChange}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper smallWidth>
        <Styled.EntryFormInputTitle htmlFor="timefrom">FROM</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="timefrom"
          name="timefrom"
          type="time"
          value={newTimeEntry.timefrom ?? ""}
          onChange={handleChange}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper smallWidth>
        <Styled.EntryFormInputTitle htmlFor="timeto">TO</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="timeto"
          name="timeto"
          type="time"
          value={newTimeEntry.timeto ?? ""}
          onChange={handleChange}
        />
      </Styled.InputElementWrapper>
      <Button type="Tertiary">Add</Button>
    </Styled.EntryFormWrapper>
  );
}

export default EntryForm;
