import React, { useState } from "react";

import { Icon } from "../components/icon/Icon";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/button/Button";
import GlobalStyle from "../styles/Global";
import Header from "../components/header/Header";
import mockTimeEntries from "../fixtures/time-entries";
import TimeEntries from "../components/time-entries/TimeEntries";
import EntryForm from "../components/form/EntryForm";

function App() {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const addNewTimeEntry = (newTimeEntry) => {
    // change the mock data to the data filled in, in the form component

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
      <Header />
      <Styled.FirstPageWrapper>
        {!isOpen && (
          <Button primary onClick={handleClick}>
            <Icon />
            New Time Entry
          </Button>
        )}
        {isOpen && <EntryForm onClose={handleClick} onSubmit={addNewTimeEntry} />}
        <TimeEntries timeEntries={timeEntries} />
      </Styled.FirstPageWrapper>
    </>
  );
}

export default App;
