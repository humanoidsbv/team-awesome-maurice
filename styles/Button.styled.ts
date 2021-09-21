import styled from "styled-components";

export const Primary = styled.button`
  font-size: 14px;
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: #fff;
  font-family: Proximanova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  height: 36px;
  margin: 24px 16px;
  width: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Secondary = styled(Primary)`
  background-color: red;
`;
