import styled from "styled-components";

export const FirstPageWrapper = styled.div`
  padding: 24px 16px;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    max-width: 1170px;
    margin-top: 33px;
  }
`;
