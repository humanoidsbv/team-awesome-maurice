import styled from "styled-components";

export const FilterSelect = styled.select`
  border-radius: 4px;
  border: solid 1px #ced0da;
  color: #7f8fa4;
  height: 36px;
  margin-top: 10px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const FilterOption = styled.option`
  text-align: center;
`;
