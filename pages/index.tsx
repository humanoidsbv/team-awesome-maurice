import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { getTimeEntries } from "../services/get-time-entries";
import { NotFoundError } from "../services/not-found-error";
import { postTimeEntries } from "../services/post-time-entries";
import { theme } from "../styles/theme";
import * as Styled from "../styles/FirstPageWrapper.styled";
import AddIcon from "../components/add-icon/AddIconWrapper";
import Button from "../components/button/Button";
import EntryForm from "../components/entry-form/EntryForm";
import FetchErrorMessage from "../components/error-handling/ErrorMessage";
import GlobalStyle from "../styles/global";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import Subheader from "../components/subheader/Subheader";
import TimeEntries from "../components/time-entries/TimeEntries";

export interface ErrorMessageProps {
  error: string,
  submessage: string,
  type: "error" | "empty",
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeEntries, setTimeEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProps>();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const fetchTimeEntries = async () => {
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

  useEffect(() => {
    setIsLoading(true);
    fetchTimeEntries();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const addNewTimeEntry = async (newTimeEntry: object) => {
    setIsLoading(true);
    await postTimeEntries(newTimeEntry);
    await fetchTimeEntries();
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Subheader timeEntries={timeEntries} />
        <Styled.FirstPageWrapper>
          {!isOpen && (
            <Button buttonType="primary" onClick={handleClick}>
              <AddIcon />
              New Time Entry
            </Button>
          )}
          <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={addNewTimeEntry} />
          {isLoading && <Loading />}
          {!isLoading && timeEntries.length ? (
            <TimeEntries fetchTimeEntries={fetchTimeEntries} timeEntries={timeEntries} />
          ) : (
            <FetchErrorMessage message={errorMessage} />
          )}
        </Styled.FirstPageWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
