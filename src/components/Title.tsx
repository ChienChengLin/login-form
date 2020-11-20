import React, { FC, CSSProperties } from "react";
import Typography from "@material-ui/core/Typography";

type Props = {
  text: string;
  customizedStyle?: CSSProperties;
};

const Title: FC<Props> = ({ text, customizedStyle }) => {
  return (
    <Typography color="textPrimary" variant="h1" style={customizedStyle}>
      {text}
    </Typography>
  );
};

export default Title;
