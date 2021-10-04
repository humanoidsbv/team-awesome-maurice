import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: any;
}

function Button({ children, onClick, primary, secondary, tertiary, disabled}: ButtonProps) {
  return (
    <>
      {primary && <Styled.ButtonPrimary onClick={onClick}>{children}</Styled.ButtonPrimary>}
      {secondary && <Styled.ButtonSecondary onClick={onClick}>{children}</Styled.ButtonSecondary>}
      {tertiary && (
        <Styled.ButtonTertiary onClick={onClick} type="submit" disabled={disabled}>
          {children}
        </Styled.ButtonTertiary>
      )}
    </>
  );
}

export default Button;
