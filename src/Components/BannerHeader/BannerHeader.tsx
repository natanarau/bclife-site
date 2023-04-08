import { Box } from "@mui/material";
import { Link } from "react-router-dom";
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
        <Link to="produtos/Gel_De_Arnica_200_Natulife">
          <Button variant="outlined">Ver Produto</Button>
        </Link>
      </S.BoxTexts>
    </S.Whapper>
  );
}
