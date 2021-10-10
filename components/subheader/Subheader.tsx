import React from "react";

import * as Styled from "./Subheader.styled";
import { TimeEntryInterface } from "../interface";

interface SubheaderProps {
  timeEntries: TimeEntryInterface[]
}

const Subheader = ({ timeEntries }: SubheaderProps) => {
  return (
    <Styled.SubheaderWrapper>
      <Styled.CurrentPageName>Time Entries</Styled.CurrentPageName>
      <Styled.CurrentPageCount>{`${timeEntries.length} entries`}</Styled.CurrentPageCount>
    </Styled.SubheaderWrapper>
  );
}

export default Subheader;
