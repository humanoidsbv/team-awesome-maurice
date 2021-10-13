import styled from "styled-components";

export const Navigation = styled.nav<{ isActive: boolean }>`
  background-color: #4f88ef;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  padding-top: 40px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-left: 16px;
    padding-top: 0;
    width: auto;
  }
`;

export const NavigationMenu = styled.ul`
  list-style-type: none;
  text-align: center;
  padding-left: 0;

  @media (${({ theme }) => theme.desktop}) {
    column-gap: 40px;
    display: inline-flex;
  }
`;

export const NavigationMenuList = styled.li`
  cursor: pointer;
  margin-bottom: 26px;

  @media (${({ theme }) => theme.desktop}) {
    margin-bottom: 0;
  }
`;

export const NavigationMenuItem = styled.a<{ selected?: boolean }>`
  background-color: ${(props) => (props.selected ? "#1166a5" : "none")};
  border-radius: ${(props) => (props.selected ? "4px" : "0")};
  color: #fff;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 10px;
  padding: ${(props) => (props.selected ? "10px 15px" : 0)};
  text-decoration: none;
`;
