import * as Styled from "../styles/Navigation.styled";

function Navigation( { isActive } ) {
    return (
        <Styled.Navigation isActive={isActive}>
            <Styled.NavigationMenu>
                <Styled.NavigationMenuList>
                    <Styled.NavigationMenuItem navItemSelected href="#">Timesheets</Styled.NavigationMenuItem>
                </Styled.NavigationMenuList>
                <Styled.NavigationMenuList>
                    <Styled.NavigationMenuItem href="#">Team members</Styled.NavigationMenuItem>
                </Styled.NavigationMenuList>
                <Styled.NavigationMenuList>
                    <Styled.NavigationMenuItem href="#">Projects</Styled.NavigationMenuItem>
                </Styled.NavigationMenuList>
                <Styled.NavigationMenuList>
                    <Styled.NavigationMenuItem href="#">Clients</Styled.NavigationMenuItem>
                </Styled.NavigationMenuList>
                <Styled.NavigationMenuList>
                    <Styled.NavigationMenuItem href="#">Documents</Styled.NavigationMenuItem>
                </Styled.NavigationMenuList>
            </Styled.NavigationMenu>
        </Styled.Navigation>
    )
};

export default Navigation;