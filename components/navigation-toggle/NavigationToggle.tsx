import React from "react";

import * as Styled from "./NavigationToggle.styled";

interface NavigationToggleProps {
  isActive: boolean;
  onClick: () => void;
}

const NavigationToggle = ({ isActive, onClick }: NavigationToggleProps) => {
  return <Styled.NavigationToggle isActive={isActive} onClick={onClick} />;
}

export default NavigationToggle;
