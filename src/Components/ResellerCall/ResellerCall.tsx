import { Box } from "@mui/material";
import Button from "../Button";
import * as S from "./styles";

export default function ResellerCall() {
  return (
    <>
      <S.Wrapper>
        <S.Title>REVENDA NOSSOS PRODUTOS</S.Title>
        <Box maxWidth="700px">
          <S.Description>
            Torne-se uma Consultora BC Life Cosméticos, cosméticos para cabelo,
            rosto, corpo e pés. Perfumaria da marca Água de Cheiro, lucros de
            até 35%, parcelamento em até 10X sem juros no cartão, brindes
            exclusivos no ato do cadastro, entrega em todo o Rio Grande do
            Norte.
            <br />
            Faça o seu cadastro online ou em uma de nossas lojas.
          </S.Description>
        </Box>
        <S.Video controls>
          <source src="video/chamada-revenda.mp4" type="video/mp4" />
        </S.Video>
        <S.HiperLink href=" https://wa.me/5584986000408?text=Olá!%20Tenho%20interesse%20em%20ser%20consultor(a)." target="_blank">Cadastre-se</S.HiperLink>
      </S.Wrapper>
    </>
  );
}
