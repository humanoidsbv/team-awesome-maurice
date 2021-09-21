import React from "react";

import * as Styled from "../styles/Button.styled";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "Primary" | "Secondary";
  children: React.ReactNode;
}

// const Button: React.FunctionComponent<ButtonProps> = ({ type, children }) => {
//   return (
//     <>
//       {type === "Primary" ? (
//         <Styled.Primary>{children}</Styled.Primary>
//       ) : (
//         <Styled.Secondary>{children}</Styled.Secondary>
//       )}
//     </>
//   );
// };

function Button({ onClick, type = "Primary", children }: ButtonProps) {
  return (
    <>
      {type === "Primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>
      )}
    </>
  );
}

export default Button;
