import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
  isDisabled?: boolean;
}

function Button({ children, onClick, isDisabled, primary, quaternary, secondary, tertiary }: ButtonProps) {
  return (
    <>
      {primary && <Styled.ButtonPrimary onClick={onClick}>{children}</Styled.ButtonPrimary>}
      {secondary && <Styled.ButtonSecondary onClick={onClick}>{children}</Styled.ButtonSecondary>}
      {tertiary && (
        <Styled.ButtonTertiary onClick={onClick} type="submit" disabled={isDisabled}>
          {children}
        </Styled.ButtonTertiary>
      )}
      {quaternary && <Styled.ButtonQuaternary onClick={onClick}>{children}</Styled.ButtonQuaternary>}
    </>
  );
}

export default Button;
