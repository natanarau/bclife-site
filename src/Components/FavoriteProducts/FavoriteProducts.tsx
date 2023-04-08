import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "./styles";

export default function FavoriteProduct() {
  return (
    <Box>
      <S.Title>NOSSOS FAVORITOS</S.Title>
      <Box display="grid" gap="60px">
        <S.Whapper>
          <S.Content>
            <Box data-id="product-1" maxWidth="480px">
              <S.ContentTitle>
                Deo Colônia Feminina Água de Cheiro Attractive
              </S.ContentTitle>
              <S.ContentDescription>
                Attractive foi inspirado no estilo de vida urbano e agitado das
                grandes capitais mundiais.Traz em sua composição flor de
                maracujá combinadas com sândalo em um fundo adocicado radiante.
                Poder da atração. Fragrância para a mulher moderna e antenada
                que exala sensualidade pelas notas vibrantes e gourmand.
                Mulheres que adoram a cidade, seu agito, suas cores e seu
                movimento.
              </S.ContentDescription>
              <Link to="produtos/Deo_Colonia_Feminina_Agua_de_Cheiro_Attractive">
                <Button variant="outlined">Ver Produto</Button>
              </Link>
            </Box>
            <Box bgcolor="#F5E1AC" maxWidth="400px">
              <S.ContentImg
                src="img/Attractive_Feminino_90ml.png"
                alt="Deo Colônia Feminina Água de Cheiro Attractive"
              />
            </Box>
          </S.Content>
        </S.Whapper>

        <S.Whapper>
          <S.Content>
            <Box data-id="product-2" bgcolor="#fff" maxWidth="400px">
              <S.ContentImg
                src="img/spa_para_os_pes_sofisticatto.png"
                alt="Deo Colônia Feminina Água de Cheiro Attractive"
              />
            </Box>
            <Box maxWidth="480px">
              <S.ContentTitle>
                Creme para Afinar os Pés SPA para os Pés Sofisticatto
              </S.ContentTitle>
              <S.ContentDescription>
                Creme para Afinar os Pés O creme para afinar os pés com uréia
                Quando usada com regularidade, a URÉIA regenera e protege a
                pele, tem comprovado efeito hidratante e permite grande absorção
                e retenção de água pela pele prevenindo ou reduzindo rachaduras.
                O creme Spa para os pés com uréia deve ser usado diariamente.
              </S.ContentDescription>
              <Link to="produtos/Creme_para_Afinar_os_Pes_SPA_para_os_Pes_Sofisticatto">
                <Button variant="outlined">Ver Produto</Button>
              </Link>
            </Box>
          </S.Content>
        </S.Whapper>
        <Box display="grid" justifyItems="center">
          <S.HiperLink to="/produtos">VEJA MAIS PRODUTOS</S.HiperLink>
        </Box>
      </Box>
    </Box>
  );
}
