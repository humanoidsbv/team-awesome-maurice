import React, { useState } from "react";
import * as Styled from "./StyledHeader.styled";

import NavigationToggle from "../NavigationToggle/NavigationToggle";
import Navigation from "../Navigation/Navigation";
import User from "../User/User";

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
