import styled from "styled-components";

export const NavigationToggle = styled.button<{ isActive: boolean }>`
  background: ${(props) =>
    props.isActive
      ? 'url("/icons/group.svg") no-repeat center'
      : 'url("/icons/shape.svg") no-repeat center'};
  border: none;
  cursor: pointer;
  display: flex;
  padding: 20px;
  position: absolute;
  right: 6px;
  top: 5px;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;
