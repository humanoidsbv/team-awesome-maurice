import styled from "styled-components";

export const UserWrapper = styled.div`
    background-color: #fff;
    border-radius: 18px;
    display: flex;
    flex-direction: row-reverse;
    height: 28px;
    margin: 12px;
    position: absolute;
    right: 20px;
    width: 120px;

    @media screen and (min-width: 0px) and (max-width: 1023px) {
        display: none;
    }
`

export const CompanyLogo = styled.img`
    @media screen and (min-width: 1023px) {
        display: flex;
        height: auto;
        left: 8px;
        position: absolute;
        top: 10px;
        width: 60%;
    }
`

export const UserImage = styled.img`
    border-radius: 50%;
    height: auto;
    margin: 1px; 
    width: 20%;
`