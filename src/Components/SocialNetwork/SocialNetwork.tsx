import * as S from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

export default function SocialNetwork() {
  return (
    <>
      <S.Wrapper>
        <S.HiperLink
          href="https://www.facebook.com/bclifecosmetico5/?locale=pt_BR"
          target="_blank"
        >
          <FacebookIcon color="action" />
        </S.HiperLink>
        <S.HiperLink
          href="https://www.instagram.com/bclifeparnamirim/"
          target="_blank"
        >
          <InstagramIcon color="action" />
        </S.HiperLink>
      </S.Wrapper>
      <Box position="fixed" zIndex={1} right={0} bottom="10px">
        <S.HiperLink
          href="https://wa.me/5584986000408?text=Ola%20gostaria%20de%20um%20atendimento"
          target="_blank"
        >
          <WhatsAppIcon color="success" fontSize="large" />
        </S.HiperLink>
      </Box>
    </>
  );
}
