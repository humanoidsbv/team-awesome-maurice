import React from "react";

import { ErrorMessageProps } from "../../pages";
import * as Styled from "./ErrorMessage.styled";

interface FetchErrorMessageProps {
  message: ErrorMessageProps;
}

const ErrorMessage = ({ message }: FetchErrorMessageProps) => {
  return (
    <Styled.ErrorMessageWrapper type={message?.type}>
      <Styled.ErrorMessage>{message?.error}</Styled.ErrorMessage>
      <Styled.ErrorSubMessage>{message?.submessage}</Styled.ErrorSubMessage>
    </Styled.ErrorMessageWrapper>
  );
}

export default ErrorMessage;
