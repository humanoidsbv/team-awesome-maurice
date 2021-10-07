import React from "react";

import PlusIcon from "../../public/icons/plus-icon.svg";
import DeleteIcon from "../../public/icons/delete-icon.svg";
import * as Styled from "./Icon.styled";

interface IconProps {
  plusIcon?: boolean;
  deleteIcon?: boolean;
}

export function Icon({ deleteIcon, plusIcon }: IconProps) {
  return (
    <>
      {plusIcon && (
        <Styled.Icon>
          <PlusIcon />
        </Styled.Icon>
      )}
      {deleteIcon && (
        <Styled.Icon>
          <DeleteIcon fill="#fff" />
        </Styled.Icon>
      )}
    </>
  );
}
