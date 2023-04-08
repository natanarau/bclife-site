import * as S from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialNetwork() {
  return (
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
  );
}
