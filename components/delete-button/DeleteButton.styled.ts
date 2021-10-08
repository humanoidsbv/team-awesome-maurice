import styled from "styled-components";

export const DeleteButton = styled.button`
  align-items: center;
  background-color: #fb6375;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  height: auto;
  justify-content: center;
  margin-right: auto;
  padding: 6px;
  width: fit-content;
`;
