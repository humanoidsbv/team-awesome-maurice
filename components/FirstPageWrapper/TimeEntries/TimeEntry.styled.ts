import styled from "styled-components";

export const TimeEntry = styled.div<{ renderState: string }>`
  ${(props) =>
    props.renderState === "isBottom" &&
    `border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;`};
  ${(props) => props.renderState === "isCenter" && `border-radius: 0px`};
  ${(props) =>
    props.renderState === "isTop" && `border-top-left-radius: 4px; border-top-right-radius: 4px;`};
  ${(props) => props.renderState === "standAlone" && `border-radius: 4px`};
  align-items: center;
  border-left: solid 4px #4f88ef !important;
  border: solid 1px #e6eaee;
  display: flex;
  font-family: ProximaNova, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 82px;
  justify-content: space-between;
`;

export const TimeEntryClient = styled.span`
  font-size: 16px;
  padding-left: 16px;
`;

export const TimeEntryTime = styled.span`
  padding-right: 16px;
`;
