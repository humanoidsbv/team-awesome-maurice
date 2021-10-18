import React, { useRef, useState } from "react";

import { TimeEntryInterface } from "../../types/form-interfaces";
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

const EntryForm = ({ isOpen, onClose, onSubmit }: EntryFormProps) => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [formValidity, setFormValidity] = useState<FormValidation>({});
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntryInterface>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    setIsFormValid(formRef.current?.checkValidity());
    event.preventDefault();
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formattedResponse = {
      client: newTimeEntry.client,
      startTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeFrom}`).toISOString(),
      endTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeTo}`).toISOString(),
    };
    onSubmit(formattedResponse);
    setNewTimeEntry({});
    setIsFormValid(false);
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
          <img src="/icons/close.svg" alt="Close button" />
        </Styled.CloseButton>
        <Styled.InputElementWrapper>
          <Styled.EntryFormInputTitle htmlFor="client">Employer</Styled.EntryFormInputTitle>
          <Styled.EntryFormInput
            id="client"
            invalid={formValidity.client !== false}
            name="client"
            onBlur={checkValidity}
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.client ?? ""}
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
        <Styled.ButtonWrapper>
          <Button fullWidth desktopWidthMini disabled={!isFormValid}>
            Add
          </Button>
        </Styled.ButtonWrapper>
      </Styled.EntryFormWrapper>
    </>
  );
};

export default EntryForm;
