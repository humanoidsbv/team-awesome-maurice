import styled from "styled-components";

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const TeamMembersTitle = styled.div`
  color: #354052;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 24px;

  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
