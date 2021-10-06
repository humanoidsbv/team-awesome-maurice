import React from "react";
import { errorMessageInterface } from "../../pages";
import * as Styled from "./ErrorMessage.styled";

interface FetchErrorMessageProps {
  message: errorMessageInterface;
}

function ErrorMessage({ message }: FetchErrorMessageProps) {
  return (
    <Styled.ErrorMessageWrapper type={message?.type}>
      <Styled.ErrorMessage>{message?.error}</Styled.ErrorMessage>
      <Styled.ErrorSubMessage>{message?.submessage}</Styled.ErrorSubMessage>
    </Styled.ErrorMessageWrapper>
  );
}

export default ErrorMessage;
