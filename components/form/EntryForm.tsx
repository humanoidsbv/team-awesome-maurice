import React, { useState } from "react";

import * as Styled from "./EntryForm.styled";
import Button from "../button/Button";
import { TimeEntryInterface } from "../time-entries/Interface";

export interface EntryFormProps {
  onClose?: () => void;
  onSubmit?: (newTimeEntry) => void;
  isOpen?: boolean;
}

function EntryForm({ onClose, onSubmit, isOpen }: EntryFormProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntryInterface>({});
  const [formValidity, setIsFormValidity] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTimeEntry);
    setNewTimeEntry({});
  };

  const checkValidity = (event) => {
    const validation = { ...formValidity, [event.target.name]: event.target.checkValidity() };
    setIsFormValidity(validation);
  };

  return (
    <>
      <Styled.FormTitle>New Time Entry</Styled.FormTitle>
      <Styled.EntryFormWrapper isOpen={isOpen} onSubmit={handleSubmit}>
        <Styled.CloseButton onClick={onClose}>
          <img src="/icons/close.svg" alt="close button" />
        </Styled.CloseButton>
        <Styled.InputElementWrapper>
          <Styled.EntryFormInputTitle htmlFor="employer">Employer</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="employer"
            invalid={formValidity.employer !== false}
            name="employer"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.employer ?? ""}
          />
        </Styled.InputElementWrapper>
        <Styled.InputElementWrapper>
          <Styled.EntryFormInputTitle htmlFor="activity">Activity</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="activity"
            invalid={formValidity.activity !== false}
            name="activity"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.activity ?? ""}
          />
        </Styled.InputElementWrapper>
        <Styled.InputElementWrapper>
          <Styled.EntryFormInputTitle htmlFor="date">Date</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="date"
            invalid={formValidity.date !== false}
            name="date"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="date"
            value={newTimeEntry.date ?? ""}
          />
        </Styled.InputElementWrapper>
        <Styled.InputElementWrapper smallWidth>
          <Styled.EntryFormInputTitle htmlFor="timefrom">From</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="timefrom"
            invalid={formValidity.timefrom !== false}
            name="timefrom"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="time"
            value={newTimeEntry.timefrom ?? ""}
          />
        </Styled.InputElementWrapper>
        <Styled.InputElementWrapper smallWidth>
          <Styled.EntryFormInputTitle htmlFor="timeto">To</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="timeto"
            invalid={formValidity.timeto !== false}
            name="timeto"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="time"
            value={newTimeEntry.timeto ?? ""}
          />
        </Styled.InputElementWrapper>
        <Button tertiary>Add</Button>
      </Styled.EntryFormWrapper>
    </>
  );
}

export default EntryForm;
