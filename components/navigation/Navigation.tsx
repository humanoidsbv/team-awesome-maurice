import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isActive: boolean;
}

const Navigation = ({ isActive }: NavigationProps) => {
  const router = useRouter();

  return (
    <Styled.Navigation isActive={isActive}>
      <Styled.NavigationMenu>
        <Styled.NavigationMenuList>
          <Link href="/">
            <Styled.NavigationMenuItem selected={router.pathname === "/"}>
              Timesheets
            </Styled.NavigationMenuItem>
          </Link>
        </Styled.NavigationMenuList>
        <Styled.NavigationMenuList>
          <Link href="/team-members">
            <Styled.NavigationMenuItem selected={router.pathname === "/team-members"}>
              Team members
            </Styled.NavigationMenuItem>
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
