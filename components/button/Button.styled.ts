import styled from "styled-components";

export const ButtonPrimary = styled.button`
  align-items: center;
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: #fff;
  display: flex;
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-image: linear-gradient(to top, #f2f4f7, #fff);
  border: solid 1px #ced0da;
  color: #354052;
`;

export const ButtonTertiary = styled(ButtonPrimary)`
  margin-top: 42px;
`
