import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const ButtonStyle = styled(Button)`
  &.MuiButtonBase-root {
    min-width: ${(props) => props.width || "64px"};
    height: ${(props) => props.height || "48px"};
    background-color: ${(props) =>
      props.background ? props.background : props.theme.color.white};
    border: ${(props) =>
      props.$borderColor ? `1px solid ${props.$borderColor}` : "0px"};
    border-radius: ${(props) => props.borderRadius || "15px"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    box-sizing: border-box;
    &:hover {
      transition: background-color 0.6s ease, color 0.6s ease;
      background: ${(props) => props.$hoverBk || "none"};
      & p {
        color: ${(props) => props.$hoverColor || props.theme.color.black};
      }
    }
  }
`;

const TextStyle = styled.p`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.xs};
  color: ${(props) => props.color || props.theme.color.white};
  margin: 0px;
  line-height: 22px;
  padding: 0 8px;
  text-transform: none;
`;

const CommonButton = (props) => {
  const {
    text,
    width,
    height,
    background,
    color,
    $borderColor,
    borderRadius,
    fontSize,
    disabled,
    onClick,
    $hoverBk,
    $hoverColor,
    startIcon,
    endIcon,
    type,
  } = props;

  return (
    <ButtonStyle
      width={width}
      height={height}
      background={background}
      $borderColor={$borderColor}
      borderRadius={borderRadius}
      $hoverBk={$hoverBk}
      $hoverColor={$hoverColor}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      disableRipple
      type={type}
    >
      {startIcon && startIcon}
      <TextStyle color={color} fontSize={fontSize}>
        {text}
      </TextStyle>
      {endIcon && endIcon}
    </ButtonStyle>
  );
};
export default CommonButton;
