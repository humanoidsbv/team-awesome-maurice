import styled from "styled-components";

export const ErrorMessageWrapper = styled.div<{backgroundColor: string, border: string}>`
	align-self: center;
	background-color: ${(props) => props.backgroundColor};
	border-radius: 4px;
	border: 1px solid ${(props) => props.border};
	padding: 24px;
  margin-top: 60px;
`;

export const FetchErrorMessage = styled.h1`
  font-family: ${({ theme }) => theme.fontPrimary};
	font-size: 20px;
	text-align: center;
`;

export const FetchErrorSubMessage = styled.p`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  text-align: center;
	padding-top: 10px;
`;