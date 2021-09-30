import styled from "styled-components";

export const SubheaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #e6eaee;
  display: inline-flex;
  flex-direction: row;
  margin-top: 30px;
  padding-bottom: 25px;
  width: 100vw;

  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
`;

export const CurrentPageName = styled.h1`
  color: #354052;
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
	margin-right: 12px;
	margin-left: 30px;
`;

export const Divider = styled.div`
  background: #dfe3e9;
  height: 14px;
  margin-right: 12px;
  width: 1px;
`;

export const CurrentPageCount = styled.p`
  color: #7f8fa4;
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
`;
