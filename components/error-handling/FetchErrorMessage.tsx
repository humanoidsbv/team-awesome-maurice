import React from "react";
import { errorMessageInterface } from "../../pages";
import * as Styled from "./FetchErrorMessage.styled";

interface FetchErrorMessageProps {
  message: errorMessageInterface;
}

function FetchErrorMessage({ message }: FetchErrorMessageProps) {
  return (
    <Styled.ErrorMessageWrapper backgroundColor={message?.color} border={message?.border}>
      <Styled.FetchErrorMessage>{message?.error}</Styled.FetchErrorMessage>
      <Styled.FetchErrorSubMessage>{message?.submessage}</Styled.FetchErrorSubMessage>
    </Styled.ErrorMessageWrapper>
  );
}

export default FetchErrorMessage;
