import * as S from "./styles";
import { productsList } from "../../utils/products.list";
import Button from "../Button";
import { Box } from "@mui/material";

export default function Products() {
  return (
    <S.Session>
      <S.Title>Produtos</S.Title>
      <S.Content>
        {productsList.map((item) => (
          <S.Wrapper>
            <S.imgProduct src={`img/products/${item.img}.png`} />
            <Box height="50px">
              <S.NameProduct>{item.name}</S.NameProduct>
            </Box>
            <S.ValueProduct>R$ {item.value}</S.ValueProduct>
            <Button variant="outlined">Ver detalhes</Button>
          </S.Wrapper>
        ))}
      </S.Content>
    </S.Session>
  );
}
