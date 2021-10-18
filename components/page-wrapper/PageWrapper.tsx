import React from "react";

import * as Styled from "./PageWrapper.styled";

interface PageWrapperProps {
  children?: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <Styled.PageWrapper>{children}</Styled.PageWrapper>;
};

export default PageWrapper;
