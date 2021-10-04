import styled from "styled-components";

export interface StyledTimeEntryProps {
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
}

export const TimeEntry = styled.div<StyledTimeEntryProps>`
  align-items: center;
  border: solid 1px #e6eaee;
  border-bottom-left-radius: 0;
  border-left: 0px;
  border-radius: 4px;
  border-top-left-radius: 0;
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 82px;
  justify-content: space-between;

  ${(props) =>
    props.isBottom &&
    `border-bottom-left-radius: 0px; border-top-left-radius: 0px; border-top-right-radius: 0px`};
  ${(props) => props.isCenter && `border-radius: 0px; border-bottom: 0px`};
  ${(props) =>
    props.isTop &&
    `border-bottom-left-radius: 0px; border-top-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom: 0px;`};
`;

export const TimeEntryClient = styled.span`
  font-size: 16px;
  padding-left: 16px;
`;

export const TimeEntryTime = styled.span`
  padding-right: 16px;
`;

export const TimeEntryWrapper = styled.div<StyledTimeEntryProps>`
  border-left: solid 4px #4f88ef;
  border-radius: 4px;

  ${(props) => props.isBottom && `border-bottom-left-radius: 4px; border-top-left-radius: 0px;`};
  ${(props) => props.isCenter && `border-bottom-left-radius: 0px; border-top-left-radius: 0px;`};
  ${(props) => props.isTop && `border-bottom-left-radius: 0px; border-top-left-radius: 4px;`};
`;
