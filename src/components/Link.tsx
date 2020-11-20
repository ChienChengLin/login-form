import React, { FC, CSSProperties } from "react";
import { Link as MaterialLink } from "@material-ui/core";

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  customizedStyle?: CSSProperties;
};

const Link: FC<Props> = ({ title, onClick, customizedStyle }) => {
  return (
    <MaterialLink
      color="textPrimary"
      variant="h2"
      component="button"
      onClick={onClick}
      style={customizedStyle}
    >
      {title}
    </MaterialLink>
  );
};

export default Link;
