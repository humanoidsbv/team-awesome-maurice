import React, { useState } from "react";

import { Icon } from "../components/FirstPageWrapper/Button/Icon/Icon";
import * as Styled from "../styles/FirstPageWrapper.styled";
import Button from "../components/FirstPageWrapper/Button/Button";
import GlobalStyle from "../styles/Global";
import Header from "../components/Header/Header";
import mockTimeEntries from "../fixtures/time-entries";
import TimeEntries from "../components/FirstPageWrapper/TimeEntries/TimeEntries";

function App() {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: 0.8524250995148188,
        client: "Port of Rotterdam",
        startTimestamp: "2019-09-26T16:00:00.000Z",
        stopTimestamp: "2019-09-26T18:00:00.000Z",
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
