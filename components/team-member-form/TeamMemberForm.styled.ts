import styled from "styled-components";

export const TeamMemberForm = styled.form<{ onCancel?: boolean }>`
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef !important;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  margin-top: 70px; // for dev purposes, check later whether should delete

  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const TeamMemberFormWrapper = styled.div`
  display: flex;
  margin: 85px 30px 43px 30px;

  @media (${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const ChangeAvatarOption = styled.a`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  padding-top: 10px;
`;

export const TitleWrapper = styled.div`
  background-color: #fff;
  border-left: solid 4px #4f88ef !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: solid 1px #e6eaee;
  left: -4px;
  position: absolute;
  top: -48px;

  border-bottom: none;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  padding: 15px 33px;
`;

export const FormWrapperLeft = styled.div`
  border-right: 1px solid #dfe3e9;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 30px;
`;

export const FormWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InputElementWrapper = styled.div<{ smallWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 37px;
  width: ${(props) => (props.smallWidth ? "calc(50% - 47px)" : "100%")};
`;

export const InputElementTitle = styled.label`
  font-weight: 600;
  margin-top: 7px;
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
`;

export const InputElement = styled.input`
  height: 36px;
  margin-top: 7px;
  border-radius: 4px;
  border: solid 1px #dfe3e9;
`;
