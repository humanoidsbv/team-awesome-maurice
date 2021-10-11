import React from "react";

import * as Styled from "./DeleteIconWrapper.styled";
import TrashCanIcon from "../../public/icons/trashcan-icon.svg";

const DeleteIconWrapper = () => {
  return (
    <Styled.DeleteIcon>
      <TrashCanIcon fill="#fff" />
    </Styled.DeleteIcon>
  );
}

export default DeleteIconWrapper;
