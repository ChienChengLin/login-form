import React, { FC, CSSProperties } from "react";
import { Button as MaterialButton } from "@material-ui/core";

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  customizedStyle?: CSSProperties;
};

const Button: FC<Props> = ({ title, onClick, customizedStyle }) => {
  return (
    <MaterialButton
      variant="contained"
      color="primary"
      onClick={onClick}
      style={customizedStyle}
    >
      {title}
    </MaterialButton>
  );
};

export default Button;
