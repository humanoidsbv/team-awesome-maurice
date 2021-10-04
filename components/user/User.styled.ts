import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  margin-right: 31px;
`;

export const UserButton = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  flex-direction: row-reverse;
  height: 36px;
  justify-content: space-between;
  margin-right: 10px;
  width: 135px;

  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const CompanyLogo = styled.img`
   @media (${({ theme }) => theme.desktop}) {
    display: flex;
    height: 10px;
    margin-left: 12px;
    width: 75px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 32px;
  margin: 1px;
  width: 32px;
`;

export const ArrowDown = styled.img`
  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
