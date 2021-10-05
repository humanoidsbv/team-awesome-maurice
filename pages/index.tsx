import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { getTimeEntries } from "../services/getTimeEntries";
import { Icon } from "../components/icon/Icon";
import { theme } from "../styles/theme";
import { TimeEntryInterface } from "../components/Interface";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/button/Button";
import EntryForm from "../components/form/EntryForm";
import GlobalStyle from "../styles/global";
import Header from "../components/header/Header";
import Subheader from "../components/subheader/subheader";
import TimeEntries from "../components/time-entries/TimeEntries";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeEntries, setTimeEntries] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const addNewTimeEntry = (newTimeEntry: TimeEntryInterface) => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: newTimeEntry.employer,
        startTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeFrom}`).toISOString(),
        endTime: new Date(`${newTimeEntry.date}T${newTimeEntry.timeTo}`).toISOString()
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
