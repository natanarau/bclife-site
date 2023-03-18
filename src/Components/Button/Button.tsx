import React from "react";
import { SxProps, Theme } from "@mui/material";
import * as S from './styles'

type ButtonType = {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained" | undefined;
  sx?: SxProps<Theme> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button({ children, ...props }: ButtonType) {
  return <S.ButtonMui {...props}>{children}</S.ButtonMui>;
}
