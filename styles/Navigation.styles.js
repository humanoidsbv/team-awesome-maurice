import styled from "styled-components";

export const Navbar = styled.nav`
    align-items: center;
    background-color: #4f88ef;
    display: ${(props) => props.isActive ? "flex" : "none"};
    flex-direction: column;
    padding-top: 50px;
`

export const NavbarMenu = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    text-align: center;
`

export const NavbarMenuList = styled.li`
    margin-top: 20px;
`

export const NavbarMenuItem = styled.a`
    text-decoration: none;
    color: #fff;
    font-family: proximanova, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`