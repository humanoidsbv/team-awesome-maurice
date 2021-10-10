import React from "react";

import * as Styled from "./DeleteButton.styled";
import DeleteIcon from "../delete-icon/DeleteIconWrapper";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <>
      <Styled.DeleteButton onClick={onClick}>
        <DeleteIcon />
        delete
      </Styled.DeleteButton>
    </>
  );
}

export default DeleteButton;