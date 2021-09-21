import React from "react";

import * as Styled from "../styles/Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "Primary" | "Secondary";
}

function Button({ onClick, type, children}: ButtonProps) {
  return (
    <>
      {type === "Primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>
      )}
    </>
  );
}

export default Button;
