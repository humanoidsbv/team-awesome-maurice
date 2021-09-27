import React from "react";

import * as Styled from "./NavigationToggle.styled";

function NavigationToggle({ isActive, onClick }) {
  return <Styled.NavigationToggle isActive={isActive} onClick={onClick} />;
}

export default NavigationToggle;
