import React, { useState } from "react";

import * as Styled from "./EntryForm.styled";
import Button from "../button/Button";
import { TimeEntryInterface } from "../time-entries/Interface";

export interface EntryFormProps {
  onClose?: () => void;
  onSubmit?: (newTimeEntry) => void;
}

function EntryForm({ onClose, onSubmit }: EntryFormProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntryInterface>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTimeEntry);
    setNewTimeEntry({});
  };

  return (
    <Styled.EntryFormWrapper onSubmit={handleSubmit}>
      <Styled.CloseButton src="/icons/close.svg" alt="close button" onClick={onClose} />
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="employer">EMPLOYER</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="employer"
          name="employer"
          onChange={handleChange}
          type="text"
          value={newTimeEntry.employer ?? ""}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="activity">ACTIVITY</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="activity"
          name="activity"
          onChange={handleChange}
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper>
        <Styled.EntryFormInputTitle htmlFor="date">Date</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="date"
          name="date"
          onChange={handleChange}
          type="date"
          value={newTimeEntry.date ?? ""}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper smallWidth>
        <Styled.EntryFormInputTitle htmlFor="timefrom">FROM</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="timefrom"
          name="timefrom"
          onChange={handleChange}
          type="time"
          value={newTimeEntry.timefrom ?? ""}
        />
      </Styled.InputElementWrapper>
      <Styled.InputElementWrapper smallWidth>
        <Styled.EntryFormInputTitle htmlFor="timeto">TO</Styled.EntryFormInputTitle>
        <Styled.EntryFormInput
          id="timeto"
          name="timeto"
          onChange={handleChange}
          type="time"
          value={newTimeEntry.timeto ?? ""}
        />
      </Styled.InputElementWrapper>
      <Button tertiary>Add</Button>
    </Styled.EntryFormWrapper>
  );
}

export default EntryForm;
