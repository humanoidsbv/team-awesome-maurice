import React from "react";

import PlusIcon from "../../public/icons/plus-icon.svg";
import * as Styled from "./AddIconWrapper.styled";

const AddIconWrapper = () => {
  return (
    <>
      <Styled.AddIcon>
        <PlusIcon />
      </Styled.AddIcon>
    </>
  );
}

export default AddIconWrapper;
