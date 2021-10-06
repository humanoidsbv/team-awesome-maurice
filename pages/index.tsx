import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { getTimeEntries, NotFoundError } from "../services/getTimeEntries";
import { Icon } from "../components/icon/Icon";
import { theme } from "../styles/theme";
import { TimeEntryInterface } from "../components/interface";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/button/Button";
import EntryForm from "../components/form/EntryForm";
import GlobalStyle from "../styles/global";
import Header from "../components/header/Header";
import Subheader from "../components/subheader/subheader";
import TimeEntries from "../components/time-entries/TimeEntries";
import FetchErrorMessage from "../components/error-handling/ErrorMessage";

export interface errorMessageInterface {
  error: string,
  submessage: string,
  type: "error" | "empty",
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState<errorMessageInterface>();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchTimeEntries() {
      const response = await getTimeEntries();

      if (response instanceof NotFoundError) {
        setErrorMessage({
          error: "Oops... Something went wrong while loading your data 😭",
          submessage: "Please try again later, or contact your developer at developer@humanoids.nl",
          type: "error",
        });
        return;
      }
      if (response.length === 0) {
        setErrorMessage({
          error: "No entries have been found yet",
          submessage: "Enter your first Time Entry 😎",
          type: "empty",
        });
      }
      setTimeEntries(response);
    }
    fetchTimeEntries();
  }, []);

  const addNewTimeEntry = (newTimeEntry: TimeEntryInterface) => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: newTimeEntry.employer,
        startTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeFrom}`).toISOString(),
        endTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeTo}`).toISOString(),
      },
    ]);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Subheader timeEntries={timeEntries} />
        <Styled.FirstPageWrapper>
          {!isOpen && (
            <Button primary onClick={handleClick}>
              <Icon />
              New Time Entry
            </Button>
          )}
          <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={addNewTimeEntry} />
          {timeEntries.length ? (
            <TimeEntries timeEntries={timeEntries} />
          ) : (
            <FetchErrorMessage message={errorMessage} />
          )}
        </Styled.FirstPageWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
