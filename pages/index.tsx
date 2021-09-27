import React, { useState } from "react";

import { Icon } from "../components/icon/Icon";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/button/Button";
import GlobalStyle from "../styles/Global";
import Header from "../components/header/Header";
import mockTimeEntries from "../fixtures/time-entries";
import TimeEntries from "../components/time-entries/TimeEntries";

function App() {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: 0.8524250995148191,
        client: "Port of Rotterdam",
        startTimestamp: "2021-09-25T16:00:00.000Z",
        stopTimestamp: "2021-09-25T18:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Styled.FirstPageWrapper>
        <Button type="Primary" onClick={handleClick}>
          <Icon />
          New Time Entry
        </Button>
        <TimeEntries timeEntries={timeEntries} />
      </Styled.FirstPageWrapper>
    </>
  );
}

export default App;
