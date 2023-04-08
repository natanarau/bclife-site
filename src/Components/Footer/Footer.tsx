import { Box } from "@mui/material";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Session>
      <S.Wrapper>
        <Box>
          <S.TextH4>
            B C COMERCIO VAREJISTA LTDA
            <br />
            22.289.749/0001-33
            <br />
            Rua Dorado, 575 PARQUE DAS NACOES PARNAMIRIM - RN
            <br />
            59158-760
          </S.TextH4>
        </Box>
        <Box display="grid" alignContent="center">
          <S.TextH4>Metodos de pagamentos</S.TextH4>
          <Box display="flex" gap="10px">
            <Box
              component="img"
              src="img/payments/logo-visa.png"
              alt="Logo da bandeira Visa"
              width="50px"
            />
            <Box
              component="img"
              src="img/payments/logo-master.png"
              alt="Logo da bandeira Master"
              width="50px"
            />
            <Box
              component="img"
              src="img/payments/logo-boleto.png"
              alt="Pagamento com boleto"
              width="50px"
            />
          </Box>
        </Box>
      </S.Wrapper>
      <Box component="h4" fontWeight={300} textAlign="center">
        Developed:{" "}
        <S.Link href="https://www.linkedin.com/in/natanarau/" target="_black">
          Natã Araujo
        </S.Link>
      </Box>
    </S.Session>
  );
}
