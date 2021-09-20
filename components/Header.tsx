import NavigationToggle from "./NavigationToggle";
import Navigation from "./Navigation";
import User from "./User";

import { useState } from "react";
import * as Styled from "../styles/StyledHeader.styled";

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
