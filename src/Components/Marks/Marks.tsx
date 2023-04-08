import * as S from "./styles";
import Slider from "react-slick";

export default function Marks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.Session>
      <S.Wrapper>
        <S.Title>MARCAS</S.Title>
        <Slider {...settings}>
          <S.Img src="img/marks/agua-de-cheiro.png" alt="Água de Cheiro" />
          <S.Img src="img/marks/fyto-natute.png" alt="Fyto Nature" />
          <S.Img src="img/marks/grandha.png" alt="Grandha" />
          <S.Img src="img/marks/natulife.png" alt="Natulife" />
          <S.Img src="img/marks/sofisticatto.png" alt="Sofisticatto" />
          <S.Img src="img/marks/habito-cosmeticos.png" alt="Habito cosmeticos" />
          <S.Img src="img/marks/via-charme.png" alt="Via Charme" />
        </Slider>
      </S.Wrapper>
    </S.Session>
  );
}
