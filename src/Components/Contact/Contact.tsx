import { Box } from "@mui/material";
import * as S from "./styles";

export default function Contact() {
  return (
    <S.Session>
      <S.Wrapper>
        <S.Logo
          src="img/logo-bclife-cosmeticos.png"
          alt="Logo Bclife Cosméticos"
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.content>
          <S.title>LOJAS</S.title>
          <S.description>
            <b>Parnamirim:</b> <br /> Av. Brg. Everaldo Breves, 152 - Centro,
            Parnamirim - RN, 59140-200 <br /> Fone: (84) 98600-0408
          </S.description>
          <S.description>
            <b>Mossoró:</b> <br /> R. Cel. Gurgel, 168 - Centro, Mossoró - RN,
            59600-200 <br /> Fone: (84) 2142-2517
          </S.description>
        </S.content>
      </S.Wrapper>
      <S.Wrapper>
        <S.content>
          <S.title>CONTATO DISTRIBUIDORA</S.title>
          <S.description>
            <b>E-mail:</b> <br />
            contato@bclifecosmeticos.com
          </S.description>
          <S.description>
            <b>Telefone:</b> <br />
            (84) 3643-2548
          </S.description>
        </S.content>
      </S.Wrapper>
    </S.Session>
  );
}
