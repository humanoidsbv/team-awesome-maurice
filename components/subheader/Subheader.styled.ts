import styled from "styled-components";

export const SubheaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #e6eaee;
  display: inline-flex;
  flex-direction: row;
  margin-top: 30px;
  padding-bottom: 25px;
  width: 100vw;
  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #354052;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  margin-right: 12px;
  margin-left: 30px;
`;

export const Description = styled.p`
  border-left: 1px solid #dfe3e9;
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  padding-left: 13px;
`;
