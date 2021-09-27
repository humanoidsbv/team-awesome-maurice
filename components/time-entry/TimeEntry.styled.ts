import styled from "styled-components";

export const TimeEntry = styled.div<{
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
  standAlone: boolean;
}>`
  align-items: center;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  border-left: 0px;
  display: flex;
  font-family: Proxima Nova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 82px;
  justify-content: space-between;

  ${(props) =>
    props.isBottom &&
    `border-bottom-left-radius: 0px; border-top-left-radius: 0px; border-top-right-radius: 0px`};
  ${(props) => props.isCenter && `border-radius: 0px; border-top: 0px; border-bottom: 0px`};
  ${(props) =>
    props.isTop &&
    `border-bottom-left-radius: 0px; border-top-left-radius: 0px; border-bottom-right-radius: 0px;`};
  ${(props) => props.standAlone && `border-bottom-left-radius: 0px; border-top-left-radius: 0px`};
`;

export const TimeEntryClient = styled.span`
  font-size: 16px;
  padding-left: 16px;
`;

export const TimeEntryTime = styled.span`
  padding-right: 16px;
`;

export const TimeEntryWrapper = styled.div<{
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
  standAlone: boolean;
}>`
  border-left: solid 4px #4f88ef;
  border-radius: 4px;

  ${(props) => props.isBottom && `border-bottom-left-radius: 4px; border-top-left-radius: 0px;`};
  ${(props) => props.isCenter && `border-bottom-left-radius: 0px; border-top-left-radius: 0px;`};
  ${(props) => props.isTop && `border-bottom-left-radius: 0px; border-top-left-radius: 4px;`};
`;
