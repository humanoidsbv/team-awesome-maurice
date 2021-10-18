import styled from "styled-components";

export const Button = styled.button<{
  desktopWidthMini?: boolean;
  fullWidth?: boolean;
  isHiddenOnDesktop?: boolean;
  primary?: boolean;
  secondary?: boolean;
}>`
  align-items: center;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  justify-content: center;

  :disabled {
    background: #cccccc;
    border: 1px solid #999999;
    color: #666666;
  }

  @media (${({ theme }) => theme.desktop}) {
    display: ${({ isHiddenOnDesktop }) => (isHiddenOnDesktop === true ? "none" : "")};
  }

  @media (${({ theme }) => theme.mobile}) {
    width: ${({ fullWidth }) => (fullWidth === true ? "100%" : "")};
  }

  ${(props) =>
    props.primary &&
    `
    background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
    border: solid 1px #249533;
  `};

  @media (${({ theme }) => theme.desktop}) {
    ${(props) =>
      props.desktopWidthMini &&
      `
      width: 90px;
    `}
  }

  @media (${({ theme }) => theme.desktop}) {
    ${(props) =>
      props.secondary &&
      `
        background-color: #f5f7f9;
        border: solid 1px #ced0da;
        color: #4b5464;
        width: 100px;
      `}
  }
`;
