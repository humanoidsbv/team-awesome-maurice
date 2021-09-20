import styled from "styled-components";

export const NavigationToggle = styled.button`
    background: ${(props) => props.isActive ? "url('/group.svg') no-repeat center" : "url('/shape.svg') no-repeat center"};
    border: none;
    cursor: pointer;
    display: flex;
    padding: 20px;
    position: absolute;
    right: 6px;
    top: 5px;

    @media screen and (min-width: 1024px) {
        background: none;
    }
`;
