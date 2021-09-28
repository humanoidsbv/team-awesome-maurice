import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "Primary" | "Secondary" | "Tertiary";
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <>
      {type === "Primary" && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {type === "Secondary" && <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>}
      {type === "Tertiary" && <Styled.Tertiary onClick={onClick} type="submit">{children}</Styled.Tertiary>}
    </>
  );
}

export default Button;
