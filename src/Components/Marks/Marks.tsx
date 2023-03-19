import { Box } from "@mui/material";
import * as S from "./styles";
import Slider from "react-slick";

export default function Marks() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <S.Session>
      <S.Wrapper>
        <S.Title>MARCAS</S.Title>
        <Slider {...settings}>
          <Box component="img" src="img/marks/agua-de-cheiro.png" alt="Água de Cheiro" sx={{width: "150px !important"}} />
          <Box component="img" src="img/marks/fyto-natute.png" alt="Fyto Nature" sx={{width: "150px !important"}} />
          <Box component="img" src="img/marks/grandha.png" alt="Grandha" sx={{width: "150px !important"}} />
          <Box component="img" src="img/marks/natulife.png" alt="Natulife" sx={{width: "150px !important"}} />
          <Box component="img" src="img/marks/sofisticatto.png" alt="Sofisticatto" sx={{width: "150px !important"}} />
          <Box component="img" src="img/marks/via-charme.png" alt="Via Charme" sx={{width: "150px !important"}} />
        </Slider>
      </S.Wrapper>
    </S.Session>
  );
}
