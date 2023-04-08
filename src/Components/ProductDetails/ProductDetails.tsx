import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import LayoutDefault from "../../Layout/default";
import { productsList } from "../../utils/products.list";
import Button from "../Button";
import * as S from "./styles";

export default function ProductDetails() {
  const { url } = useParams();
  const product = productsList.find((item) => item.url === url);

  return (
    <LayoutDefault>
      <S.Session>
        <S.Title>Detalhes do Produto</S.Title>
        <S.Wrapper>
          <S.ImgProduct
            src={`../img/products/${product?.img}.png`}
            alt={product?.name}
          />
          <Box display="grid" gap="20px" alignContent="flex-start" minWidth='300px' maxWidth="500px">
            <S.Name>{product?.name}</S.Name>
            <S.Description>{product?.description}</S.Description>
            <S.ValueProduct>R$ {product?.value}</S.ValueProduct>
            <S.HiperLink href="https://wa.me/5584986000408?text=Tenho%20interesse%20em%20comprar%20um%20produto" target="_blank">
              <Button variant="outlined">Click aqui para adquirir.</Button>
            </S.HiperLink>
          </Box>
        </S.Wrapper>
      </S.Session>
    </LayoutDefault>
  );
}
