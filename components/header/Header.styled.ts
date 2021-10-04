import styled from "styled-components";

export const Header = styled.header<{ isActive: boolean }>`
  align-items: center;
  background-color: #4f88ef;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isActive ? "100vh" : "50px")};

  .logo {
    color: #fff;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 26px;
  }

  @media (${({ theme }) => theme.desktop}) {
    flex-direction: row;
    height: 70px;
    justify-content: space-between;

    .logo {
      display: none;
    }
  }

  > h1 {
    margin-top: 10px;
  }
`;
