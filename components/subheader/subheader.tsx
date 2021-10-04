import React from "react";

import * as Styled from "./Subheader.Styled";

function Subheader({ timeEntries }) {
  return (
    <Styled.SubheaderWrapper>
      <Styled.CurrentPageName>Time Entries</Styled.CurrentPageName>
      <Styled.CurrentPageCount>{`${timeEntries.length} entries`}</Styled.CurrentPageCount>
    </Styled.SubheaderWrapper>
  );
}

export default Subheader;
