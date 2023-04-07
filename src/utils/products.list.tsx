export type ProductsType = {
  id: number;
  name: string;
  description: JSX.Element;
  value: string;
  img: string;
  active: boolean;
};

export const productsList: ProductsType[] = [
  {
    id: 1,
    name: "Gel De Arnica 200g Natulife",
    description: (
      <>
        <p>
          Gel De Arnica 200g Natulife Elaborado com Extrato de Arnica seu uso
          oferece absorção rápida e refrescante, proporcionando através de
          massagem, maior sensação de bem-estar e conforto. <b>Modo de usar:</b>
          Aplicar sobre a pele limpa e sem lesões, massageando suavemente.
        </p>
      </>
    ),
    value: "0,00",
    img: "gel_de_arnica_natu_life_200g",
    active: true,
  },
  {
    id: 2,
    name: "Deo Colônia Feminina Água de Cheiro Attractive",
    description: (
      <>
        <p>
          Attractive foi inspirado no estilo de vida urbano e agitado das
          grandes capitais mundiais.Traz em sua composição flor de maracujá
          combinadas com sândalo em um fundo adocicado radiante. Poder da
          atração. Fragrância para a mulher moderna e antenada que exala
          sensualidade pelas notas vibrantes e gourmand. Mulheres que adoram a
          cidade, seu agito, suas cores e seu movimento.
        </p>
      </>
    ),
    value: "0,00",
    img: "Attractive_Feminino_90ml",
    active: true,
  },
  {
    id: 3,
    name: "Creme para Afinar os Pés SPA para os Pés Sofisticatto",
    description: (
      <>
        <p>
          Creme para Afinar os Pés O creme para afinar os pés com uréia Quando
          usada com regularidade, a URÉIA regenera e protege a pele, tem
          comprovado efeito hidratante e permite grande absorção e retenção de
          água pela pele prevenindo ou reduzindo rachaduras. O creme Spa para os
          pés com uréia deve ser usado diariamente.
        </p>
      </>
    ),
    value: "0,00",
    img: "creme_para_afinar_os_pes_sofisticatto",
    active: true,
  }
];
