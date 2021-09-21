import styled from "styled-components";

export const Navigation = styled.nav<{ isActive: boolean }>`
  background-color: #4f88ef;
  width: 100%;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  padding-top: 40px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-top: 0;
    height: 100%;
    align-items: center;
    width: auto;
  }
`;

export const NavigationMenu = styled.ul`
  list-style-type: none;
  text-align: center;
  padding-left: 0;

  @media screen and (min-width: 1024px) {
    display: inline-flex;
    column-gap: 40px;
  }
`;

export const NavigationMenuList = styled.li`
  margin-bottom: 26px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const NavigationMenuItem = styled.a<{ navItemSelected?: boolean }>`
  background-color: ${(props) => (props.navItemSelected ? "#1166a5" : "none")};
  border-radius: ${(props) => (props.navItemSelected ? "4px" : "0")};
  color: #fff;
  font-family: proximanova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 10px;
  padding: ${(props) => (props.navItemSelected ? "10px 15px" : 0)};
  text-decoration: none;
`;
