import * as S from "./styles";

export default function Contact() {
  return (
    <S.Session>
      <S.Logo
        src="img/logo-bclife-cosmeticos.png"
        alt="Logo Bclife Cosméticos"
      />
      <S.Content>
        <S.Wrapper>
          <S.Title>LOJAS</S.Title>
          <S.Description>
            <b>Parnamirim Shopping:</b> <br /> Av. Brg. Everaldo Breves, 152 - Centro,
            Parnamirim - RN, 59140-200 <br /> Fone: (84) 2132-4486
          </S.Description>
          <S.Description>
            <b>Mossoró Liberdade Shopping:</b> <br /> R. Cel. Gurgel, 168 - Centro, Mossoró - RN,
            59600-200 <br /> Fone: (84) 2142-2517
          </S.Description>
          <S.Description>
            <b>Mossoró Park Center:</b> <br /> R. Cel. Gurgel, 168 - Centro, Mossoró - RN,
            59600-200 <br /> Fone: (84) 2142-2517
          </S.Description>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>CONTATO DISTRIBUIDORA</S.Title>
          <S.Description>
            <b>E-mail:</b> <br />
            contato@bclifecosmeticos.com
          </S.Description>
          <S.Description>
            <b>Telefone:</b> <br />
            (84) 3643-2548
          </S.Description>
        </S.Wrapper>
      </S.Content>
    </S.Session>
  );
}
