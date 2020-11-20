import React, { FC, CSSProperties } from "react";
import Typography from "@material-ui/core/Typography";

type Props = {
  text: string;
  customizedStyle?: CSSProperties;
};

const Description: FC<Props> = ({ text, customizedStyle }) => {
  return (
    <Typography color="textSecondary" variant="body1" style={customizedStyle}>
      {text}
    </Typography>
  );
};

export default Description;
