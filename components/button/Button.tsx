import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  desktopWidth?: boolean;
  disabled?: boolean;
  form?: string;
  fullWidth?: boolean;
  isHiddenOnDesktop?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
}

const Button = ({
  children,
  desktopWidth,
  disabled,
  form,
  fullWidth,
  isHiddenOnDesktop,
  onClick,
  primary,
  secondary,
}: ButtonProps) => {
  return (
    <>
      <Styled.Button
        desktopWidth={desktopWidth}
        disabled={disabled}
        form={form}
        fullWidth={fullWidth}
        isHiddenOnDesktop={isHiddenOnDesktop}
        onClick={onClick}
        primary={primary}
        secondary={secondary}
      >
        {children}
      </Styled.Button>
    </>
  );
};

export default Button;
