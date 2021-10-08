import React from "react";

import * as Styled from "./DeleteIcon.styled";
import TrashCanIcon from "../../public/icons/trashcan-icon.svg";

function DeleteIcon() {
  return (
    <Styled.DeleteIcon>
      <TrashCanIcon fill="#fff" />
    </Styled.DeleteIcon>
  );
}

export default DeleteIcon;
