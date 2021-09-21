import React from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../styles/Global";
import { Icon } from "../components/Icon";

function App() {
  const handleClick = () => {
    console.log("Someone clicked the button");
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Button type="Primary" onClick={handleClick}>
        <Icon />
        New Time Entry
      </Button>
    </>
  );
}

export default App;
