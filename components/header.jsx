import NavigationButton from "./NavigationButton";
import Navigation from "./Navigation";
import { useState } from 'react';
import * as Styled from "../styles/StyledHeader.styled";

function Header() {
    const [isActive, setIsActive] = useState(false); // state for the opening/closing of the mobile navigation

    return (
        <>
            <Styled.Header isActive={isActive}>
                <NavigationButton isClosed={!isActive} 
                                    onClick={() => setIsActive(!isActive)}/>
                <h1 className="logo">team awesome</h1>
                <Navigation isActive={isActive}/>
            </Styled.Header>
        </>
    )
}

export default Header;