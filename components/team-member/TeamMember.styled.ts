import styled from "styled-components";

export const TeamMember = styled.div`
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef !important;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PersonalInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 14px 14px;
`;

export const TeamMemberImage = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const TeamMemberNameRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Heading = styled.h3<{subHeading?: boolean}>`
  color: ${(props) => props.subHeading ? "#7f8fa4": "#354052"};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 16px;
  padding-bottom: 2px;
`;

export const FatArrowDown = styled.img`
  margin-left: auto;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const ExtraInformationWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

export const ExtraInformationTitle = styled.div`
  background-color: #f5f8fa;
  border-bottom: solid 1px #e6eaee;
  border-top: solid 1px #e6eaee;
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 10px 30px;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const ExtraInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-left: 21px;

  @media (${({ theme }) => theme.desktop}) {
    margin: 0;
    padding-right: 54px;
  }
`;


