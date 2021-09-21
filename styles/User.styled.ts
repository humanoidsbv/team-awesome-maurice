import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  margin-right: 31px;
`;

export const UserButton = styled.div`
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  width: 135px;
  margin-right: 10px;

  @media screen and (min-width: 0px) and (max-width: 1023px) {
    display: none;
  }
`;

export const CompanyLogo = styled.img`
  @media screen and (min-width: 1023px) {
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
  @media screen and (min-width: 0px) and (max-width: 1023px) {
    display: none;
  }
`;
