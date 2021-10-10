import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType?: "primary" | "secondary";
}

const Button = ({ children, buttonType, isDisabled, onClick }: ButtonProps) => {
  return (
    <>
      {buttonType === "primary" ? (
        <Styled.ButtonPrimary onClick={onClick}>{children}</Styled.ButtonPrimary>
      ) : (
        <Styled.ButtonSecondary onClick={onClick} type="submit" disabled={isDisabled}>
          {children}
        </Styled.ButtonSecondary>
      )}
    </>
  );
}

export default Button;
