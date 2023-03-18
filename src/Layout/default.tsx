import React from "react";
import * as S from './styles'

type Layout = {
  children: React.ReactNode;
};

export default function LayoutDefault({ children }: Layout) {
  return (
      <S.Container>{children}</S.Container>
  );
}
