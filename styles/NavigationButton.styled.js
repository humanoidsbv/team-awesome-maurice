import styled from "styled-components";

export const NavigationButton = styled.button`
    background: ${(props) => props.isClosed ? "url('/group.svg') no-repeat center" : "url('/shape.svg') no-repeat center"};
    border: none;
    cursor: pointer;
    display: flex;
    padding: 20px;
    position: absolute;
    right: 6px;
    top: 5px;
`;
