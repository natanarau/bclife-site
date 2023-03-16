import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Notice>
        FRETE GRÁTIS PARA GRANDE NATAL COMPRAS ACIMA DE R$100,00
      </S.Notice>
      <S.MenuHeader>
        <ul>
          <li>
            <Link to="/">INÍCIO</Link>
          </li>
          <li>
            <Link to="/products">PRODUTOS</Link>
          </li>
          <li>
            <Link to="/e">REVENDA</Link>
          </li>
        </ul>
        <S.Logo
          src="img/logo-bclife-cosmeticos.png"
          alt="Logo da Bclife Cosmeticos"
        />
      </S.MenuHeader>
    </S.Wrapper>
  );
}
