import React from "react";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  description: string; 
  title: string;
}

const Subheader = ({ description, title }: SubheaderProps) => (
  <Styled.SubheaderWrapper>
    <Styled.Title>{title}</Styled.Title>
    {description && <Styled.Description>{description}</Styled.Description>}
  </Styled.SubheaderWrapper>
);

export default Subheader;
