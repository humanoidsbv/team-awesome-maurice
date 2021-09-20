import styled from "styled-components";

export const Header = styled.header<{ isActive: boolean }>`
    align-items: center;
    background-color: #4f88ef;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.isActive ? "100vh" : "50px"};

    .logo {
        color: #fff;
        font-family: Bello, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 26px;
    }

    @media screen and (min-width: 1024px) {
        .logo {
            display: none;
        }
    }

    > h1 {
        margin-top: 10px;
    }
`;

