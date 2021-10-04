import React, { useState } from "react";

import * as Styled from "./Header.styled";
import Navigation from "../navigation/Navigation";
import NavigationToggle from "../navigation-toggle/NavigationToggle";
import User from "../user/User";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false); // state for opening/closing mobile navigation

  return (
    <Styled.Header isActive={isActive}>
      <NavigationToggle onClick={() => setIsActive(!isActive)} isActive={!isActive} />
      <h1 className="logo">team awesome</h1>
      <Navigation isActive={isActive} />
      <User />
    </Styled.Header>
  );
}

export default Header;
