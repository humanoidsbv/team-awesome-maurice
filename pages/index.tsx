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
  const [timeEntries] = useState(mockTimeEntries);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <GlobalStyle />
      <Header />
      <Styled.FirstPageWrapper>
        {!isOpen && (
          <Button type="Primary" onClick={handleClick}>
            <Icon />
            New Time Entry
          </Button>
        )}
        {isOpen && <EntryForm onClose={handleClick} />}
        <TimeEntries timeEntries={timeEntries} />
      </Styled.FirstPageWrapper>
    </>
  );
}

export default App;
