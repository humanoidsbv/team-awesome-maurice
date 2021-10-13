import Link from "next/link";
import React from "react";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isActive: boolean;
}

const Navigation = ({ isActive }: NavigationProps) => {
  return (
    <Styled.Navigation isActive={isActive}>
      <Styled.NavigationMenu>
        <Styled.NavigationMenuList>
          <Link href="/">
            <Styled.NavigationMenuItem selected>Timesheets</Styled.NavigationMenuItem>
          </Link>
        </Styled.NavigationMenuList>
        <Styled.NavigationMenuList>
          <Link href="/team-members-page">
            <Styled.NavigationMenuItem>Team members</Styled.NavigationMenuItem>
          </Link>
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
  );
};

export default Navigation;
