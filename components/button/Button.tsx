import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

function Button({ children, isDisabled, onClick, primary, secondary, tertiary }: ButtonProps) {
  return (
    <>
      {primary && <Styled.ButtonPrimary onClick={onClick}>{children}</Styled.ButtonPrimary>}
      {secondary && <Styled.ButtonSecondary onClick={onClick}>{children}</Styled.ButtonSecondary>}
      {tertiary && (
        <Styled.ButtonTertiary onClick={onClick} type="submit" disabled={isDisabled}>
          {children}
        </Styled.ButtonTertiary>
      )}
    </>
  );
}

export default Button;
