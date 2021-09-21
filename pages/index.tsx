import React from "react";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import * as Styled from "../styles/FirstPageWrapper.styled";
import GlobalStyle from "../styles/Global";
import { Icon } from "../components/Icon/Icon";

function App() {
  const handleClick = () => {
    alert("You clicked the button");
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
      </Styled.FirstPageWrapper>
    </>
  );
}

export default App;
