import styled from "styled-components";

export const Navigation = styled.nav<{ isActive: boolean }>`
  background-color: #4f88ef;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  padding-top: 40px;
  width: 100%;

  @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    column-gap: 40px;
    display: inline-flex;
  }
`;

export const NavigationMenuList = styled.li`
  margin-bottom: 26px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const NavigationMenuItem = styled.a<{ selected?: boolean }>`
  background-color: ${(props) => (props.selected ? "#1166a5" : "none")};
  border-radius: ${(props) => (props.selected ? "4px" : "0")};
  color: #fff;
  font-family: Proxima Nova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 10px;
  padding: ${(props) => (props.selected ? "10px 15px" : 0)};
  text-decoration: none;
`;
