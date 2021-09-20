import styled from "styled-components";

export const Navigation = styled.nav<{ isActive: boolean }>`
    align-items: center;
    background-color: #4f88ef;
    display: ${(props) => props.isActive ? "flex" : "none"};
    flex-direction: column;
    padding-top: 40px;

    @media screen and (min-width: 1024px) {
        display: inline-flex;
        flex-direction: row;
        left: 20px;
        padding-top: 0px;
        position: absolute;
    }
`

export const NavigationMenu = styled.ul`
    list-style-type: none;
    padding-left: 0;
    text-align: center;

    @media screen and (min-width: 1024px) {
        display: inline-flex;
        
    }
`

export const NavigationMenuList = styled.li`
    margin-top: 18px;

    @media screen and (min-width: 1024px) {
        + li {
            margin-left: 40px;
        }
    }
`

export const NavigationMenuItem = styled.a<{ navItemSelected?: boolean }>`
    background-color: ${(props) => props.navItemSelected ? "#1166a5" : "none" };
    border-radius: ${(props) => props.navItemSelected ? "4px" : "0" };
    color: #fff;
    font-family: proximanova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 10px;
    padding: ${(props => props.navItemSelected ? "10px 15px" : 0)};
    text-decoration: none;
`
