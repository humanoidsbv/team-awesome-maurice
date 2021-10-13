import React from "react";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  description: string; 
  title: string;
}

const Subheader = ({ description, title }: SubheaderProps) => (
  <Styled.SubheaderWrapper>
    <Styled.CurrentPageName>{title}</Styled.CurrentPageName>
    {description && <Styled.CurrentPageCount>{description}</Styled.CurrentPageCount>}
  </Styled.SubheaderWrapper>
);

export default Subheader;
