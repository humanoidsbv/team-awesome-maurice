import React, { useRef, useState } from "react";

import { TimeEntryInterface } from "../Interface";
import * as Styled from "./EntryForm.styled";
import Button from "../button/Button";

export interface EntryFormProps {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit: (newTimeEntry: TimeEntryInterface) => void;
}

export interface FormValidation {
  [name: string]: boolean;
}

function EntryForm({ isOpen, onClose, onSubmit }: EntryFormProps) {
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [formValidity, setFormValidity] = useState<FormValidation>({});
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntryInterface>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    setEnableSubmit(formRef.current?.checkValidity());
    event.preventDefault();
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit(newTimeEntry);
    setNewTimeEntry({});
  };

  const checkValidity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validation = { ...formValidity, [event.target.name]: event.target.checkValidity() };
    setFormValidity(validation);
  };

  return (
    <>
      <Styled.FormTitle>New Time Entry</Styled.FormTitle>
      <Styled.EntryFormWrapper isOpen={isOpen} onSubmit={handleSubmit} ref={formRef}>
        <Styled.CloseButton onClick={onClose} type="button">
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
          <Styled.EntryFormInputTitle htmlFor="timeFrom">From</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="timeFrom"
            invalid={formValidity.timeFrom !== false}
            name="timeFrom"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="time"
            value={newTimeEntry.timeFrom ?? ""}
          />
        </Styled.InputElementWrapper>
        <Styled.InputElementWrapper smallWidth>
          <Styled.EntryFormInputTitle htmlFor="timeTo">To</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="timeTo"
            invalid={formValidity.timeTo !== false}
            name="timeTo"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="time"
            value={newTimeEntry.timeTo ?? ""}
          />
        </Styled.InputElementWrapper>
        <Button isDisabled={!enableSubmit} tertiary>
          Add
        </Button>
      </Styled.EntryFormWrapper>
    </>
  );
}

export default EntryForm;
