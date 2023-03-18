import { Box } from "@mui/material";
import Button from "../Button";
import * as S from "./styles";

export default function BannerHeader() {
  return (
    <S.Whapper>
      <S.BannerImg
        src="img/gel-de-arnica.png"
        alt="Gel de Arnica para Massagem"
      />
      <S.BoxTexts>
        <S.TitleBanner>
          O ORIGINAL
          <br /> <Box component="span">GEL DE ARNICA</Box>
        </S.TitleBanner>
        <br />
        <S.DescriptionBanner>Alívio para dores musculares</S.DescriptionBanner>
        <br />
        <Button variant="outlined">Ver Produto</Button>
      </S.BoxTexts>
    </S.Whapper>
  );
}
