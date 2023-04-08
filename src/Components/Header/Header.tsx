import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ListMenu } from "./menu.tabs";

export default function Header() {
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Notice>
        <p>FRETE GRÁTIS PARA GRANDE NATAL COMPRAS ACIMA DE R$100,00</p>
      </S.Notice>
      <S.MenuHeader>
        <S.BoxMenuResponse visible={menuVisible ? 1 : 0}>
          <ul>
            {ListMenu.map((e, index) => (
              <li key={index}>
                <Link to={e.path}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </S.BoxMenuResponse>
        <S.MenuDesktop>
          <ul>
            {ListMenu.map((e, index) => (
              <li key={index}>
                <Link to={e.path}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </S.MenuDesktop>
        <S.Logo
          src="img/logo-bclife-cosmeticos.png"
          alt="Logo da Bclife Cosmeticos"
        />
        <S.BoxMenuIcon onClick={() => setMenuVisible(!menuVisible)}>
          {menuVisible ? (
            <CloseIcon sx={{ fontSize: "40px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "40px" }} />
          )}
        </S.BoxMenuIcon>
      </S.MenuHeader>
    </S.Wrapper>
  );
}
