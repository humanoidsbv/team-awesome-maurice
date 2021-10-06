import styled from "styled-components";

export const ErrorMessageWrapper = styled.div<{ type: string }>`
  align-self: center;
  ${(props) => props.type === "error" && "background-color: #ffbab9; border: 1px solid red;"};
  ${(props) => props.type === "empty" && "background-color: #feffac; border: 1px solid yellow;"};
  border-radius: 4px;
  padding: 24px;
  margin-top: 60px;
`;

export const ErrorMessage = styled.h1`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 20px;
  text-align: center;
`;

export const ErrorSubMessage = styled.p`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
`;
