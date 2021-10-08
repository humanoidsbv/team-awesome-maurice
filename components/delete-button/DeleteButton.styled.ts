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
  height: 30px;
  justify-content: center;
  margin-right: auto;
  width: 79px;
`;
