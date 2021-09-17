import * as Styled from "../styles/Navigation.styles";

function Navigation({isActive}) {
    return (
        <Styled.Navbar isActive={isActive}>
            <Styled.NavbarMenu>
            <Styled.NavbarMenuList><Styled.NavbarMenuItem href="#">Timesheets</Styled.NavbarMenuItem></Styled.NavbarMenuList>
            <Styled.NavbarMenuList><Styled.NavbarMenuItem href="#">Team members</Styled.NavbarMenuItem></Styled.NavbarMenuList>
            <Styled.NavbarMenuList><Styled.NavbarMenuItem href="#">Projects</Styled.NavbarMenuItem></Styled.NavbarMenuList>
            <Styled.NavbarMenuList><Styled.NavbarMenuItem href="#">Clients</Styled.NavbarMenuItem></Styled.NavbarMenuList>
            <Styled.NavbarMenuList><Styled.NavbarMenuItem href="#">Documents</Styled.NavbarMenuItem></Styled.NavbarMenuList>
            </Styled.NavbarMenu>
        </Styled.Navbar>
    )
};

export default Navigation;