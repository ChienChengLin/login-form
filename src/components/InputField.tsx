import React, { FC, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import { useTheme } from "@material-ui/core/styles";
import Link from "./Link";

const PostfixLink: FC<{
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ title, onClick }) => {
  return (
    <>
      <Divider
        flexItem
        variant="middle"
        orientation="vertical"
        style={{ margin: 12, width: 2 }}
      />
      <Link title={title} onClick={onClick} />
    </>
  );
};

type Props = {
  value: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: "text" | "email" | "password";
  prefixIcon?: React.ComponentType;
  postfixLinkTitle?: string;
  onClickPostfixLink?: (event: React.MouseEvent<HTMLElement>) => void;
  isValid?: boolean;
  helperText?: string;
};

const InputField: FC<Props> = ({
  value,
  onChangeValue,
  label = "Email",
  type = "email",
  prefixIcon: PrefixIcon = MailOutlineOutlinedIcon,
  postfixLinkTitle,
  onClickPostfixLink,
  isValid = true,
  helperText
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const isLabelShrunk = isFocused || value.length > 0;

  return (
    <FormControl
      fullWidth
      variant="outlined"
      size="medium"
      error={!isValid}
      style={{ margin: "10px 0" }}
    >
      <InputLabel
        htmlFor="component-outlined"
        shrink={isLabelShrunk}
        style={
          isLabelShrunk
            ? {
                padding: "5px 10px",
                marginTop: -5,
                borderRadius: 3,
                fontSize: 13,
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
              }
            : { marginLeft: 30, marginTop: -2 }
        }
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="component-outlined"
        color="primary"
        type={type}
        value={value}
        style={{ color: theme.palette.grey[900] }}
        onChange={onChangeValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        startAdornment={
          <InputAdornment position="start">
            <PrefixIcon
              style={{
                color: theme.palette.grey[300],
                fontSize: 22
              }}
            />
          </InputAdornment>
        }
        endAdornment={
          postfixLinkTitle &&
          onClickPostfixLink && (
            <PostfixLink
              title={postfixLinkTitle}
              onClick={onClickPostfixLink}
            />
          )
        }
      />
      {!isValid && (
        <FormHelperText id="component-error-text">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
