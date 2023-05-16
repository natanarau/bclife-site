import * as S from "./styles";
import { productsList } from "../../utils/products.list";
import Button from "../Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <S.Session>
      <S.Title>Produtos</S.Title>
      <S.Content>
        {productsList.map((item) => (
          <S.Wrapper key={item.id}>
            <S.imgProduct src={`img/products/${item.img}.jpeg`} />
            <Box height="50px">
              <S.NameProduct>{item.name}</S.NameProduct>
            </Box>
            {/* <S.ValueProduct>R$ {item.value}</S.ValueProduct> */}
            <Link
              to={`/produtos/${item.url}`}
              style={{ color: "initial", textDecoration: "none" }}
            >
              <Button variant="outlined">Ver detalhes</Button>
            </Link>
          </S.Wrapper>
        ))}
      </S.Content>
    </S.Session>
  );
}
