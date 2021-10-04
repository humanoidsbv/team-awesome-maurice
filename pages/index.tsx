import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Icon } from "../components/icon/Icon";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/button/Button";
import EntryForm from "../components/form/EntryForm";
import GlobalStyle from "../styles/Global";
import Header from "../components/header/Header";
import mockTimeEntries from "../fixtures/time-entries";
import Subheader from "../components/subheader/subheader";
import TimeEntries from "../components/time-entries/TimeEntries";
import { theme } from "../styles/Theme";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const addNewTimeEntry = (newTimeEntry) => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: newTimeEntry.employer,
        startTimestamp: new Date(`${newTimeEntry.date}T${newTimeEntry.timefrom}`).toISOString(),
        stopTimestamp: new Date(`${newTimeEntry.date}T${newTimeEntry.timeto}`).toISOString(),
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
          <TimeEntries timeEntries={timeEntries} />
        </Styled.FirstPageWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
