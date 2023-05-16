export type ProductsType = {
  id: number;
  name: string;
  url: string;
  description: JSX.Element;
  value: string;
  img: string;
  active: boolean;
};

export const productsList: ProductsType[] = [
  {
    id: 1,
    name: "Gel De Arnica 200g Natulife",
    url: "Gel_De_Arnica_200_Natulife",
    description: (
      <>
        <p>
          Gel De Arnica 200g Natulife Elaborado com Extrato de Arnica seu uso
          oferece absorção rápida e refrescante, proporcionando através de
          massagem, maior sensação de bem-estar e conforto. <br />
          <b>Modo de usar: </b>
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
    url: "Deo_Colonia_Feminina_Agua_de_Cheiro_Attractive",
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
    value: "139,90",
    img: "Attractive_Feminino_90ml",
    active: true,
  },
  {
    id: 3,
    name: "O creme para afinar os pés com uréia",
    url: "O_creme_para_afinar_os_pes_com_ureia",
    description: (
      <>
        <p>
          Quando usada com regularidade, a URÉIA regenera e protege a pele, tem
          comprovado efeito hidratante e permite grande absorção e retenção de
          água pela pele prevenindo ou reduzindo rachaduras. O creme Spa para os
          pés com uréia deve ser usado diariamente.
        </p>
      </>
    ),
    value: "0,00",
    img: "O_creme_para_afinar_os_pes_com_ureia",
    active: true,
  },
  {
    id: 4,
    name: "Body splash água de cheiro água fresca - 500ml",
    url: "body_splash_agua_de_cheiro_agua_fresca_500ml",
    description: (
      <>
        <p>
          Água Fresca representa a brasilidade, a leveza e o frescor. Uma
          fragrância refrescante que proporciona a sensação de estar perfumada a
          qualquer hora do dia. Marca momentos, registra memórias e acima de
          tudo, é inesquecível e apaixonante. Brasilidade, leveza e frescor.
        </p>
      </>
    ),
    value: "0,00",
    img: "body_splash_agua_de_cheiro_agua_fresca_500ml",
    active: true,
  },
  {
    id: 5,
    name: "Body splash água fresca Lavanda - 500ml",
    url: "body_splash_agua_fresca_lavanda_500ml",
    description: (
      <>
        <p>
          Abundante e Revigorante. Os refrescantes Água Fresca são perfeitos
          para perfumar, além de manter a sensação de pós banho a qualquer hora
          do dia. Fragrâncias modernas, leves e que proporcionam frescor. Marca
          momentos, registra memórias e acima de tudo, é inesquecível e
          apaixonante. Brasilidade, leveza e frescor. O conforto trazido pelas
          notas de lavanda que prologam o frescor e a sensação de estar
          perfumada a qualquer hora do dia. Para as apaixonadas por lavanda e
          pela sensação confortável de estarem perfumadas durante todo o dia
        </p>
      </>
    ),
    value: "0,00",
    img: "body_splash_agua_fresca_lavanda_500ml",
    active: true,
  },
  {
    id: 6,
    name: "Spa Base Fortalecedora com Calcio",
    url: "Spa_Base_Fortalecedora_com_Calcio",
    description: (
      <>
        <p>
          Enriquecida com cálcio, é perfeita para você tratar as suas unhas,
          usando antes da sua cor de esmalte preferida ou apenas para proteger
          as unhas, se você não quiser pinta-las!
        </p>
      </>
    ),
    value: "0,00",
    img: "Spa_Base_Fortalecedora_com_Calcio",
    active: true,
  },
  {
    id: 7,
    name: "Gel de Alecrim Natu Life 100g",
    url: "Gel_de_Alecrim_Natu_Life_100g",
    description: (
      <>
        <p>
          Funções do produto: alívio para dores musculares, relaxante muscular,
          melhora o fluxo sanguíneo, melhora nas dores reumáticas e articulares,
          gel massageador. Zona de aplicação: Corpo Descrição: Gel de Arnica
          Massageador Natu Life, contém extratos de plantas de Arnica, Centella
          Asiática, Castanha da Índia e componentes que através da massagem
          auxilia no alívio do cansaço adquirido no dia a dia e ajuda na
          prevenção de celulite e gordura localizada. Promove ação emoliente e
          refrescante com um toque macio e agradável. Modo de Usar: Aplicar o
          produto massageando as pernas, costas, ombros até a completa absorção
          do Gel de Arnica
        </p>
      </>
    ),
    value: "0,00",
    img: "Gel_de_Alecrim_Natu_Life_100g",
    active: true,
  },
  {
    id: 8,
    name: "Deocolônia Marro Clássico 100ml",
    url: "Deocolonia_Marro_Classico_100ml",
    description: (
      <>
        <p>
          O Marro traz a riqueza das especiarias nas suas notas de saída e corpo
          misturadas com o fundo amadeirado, criando uma fragrância forte e
          exótica de personalidade única, quente e intensa.
        </p>
      </>
    ),
    value: "0,00",
    img: "Deocolonia_Marro_Classico_100ml",
    active: true,
  },
  {
    id: 9,
    name: "Deocolônia Oh! 100ml",
    url: "Deocolonia_Oh_100ml",
    description: (
      <>
        <p>
          A fragrância ideal para tornar o seu dia mais leve. Refrescante,
          suave, cítrico e revigorante, é ideal para ser aplicado no pós-banho.
        </p>
      </>
    ),
    value: "0,00",
    img: "Deocolonia_Oh_100ml",
    active: true,
  },
  {
    id: 10,
    name: "Deo Colônia Água de Cheiro Absinto Feminino - 100ml",
    url: "Deo_Colonia_Agua_de_Cheiro_Absinto_Feminino_100ml",
    description: (
      <>
        <p>
          Proibido, ousado e forte. São as combinações da misteriosa linha de
          Absinto. Sua originalidade traduz a sensualidade. O equilíbrio
          perfeito entre o proibido e a vontade de ser único. As notas frutais e
          especiadas dão a esta fragrância um aspecto misterioso e sensual,
          quase proibida. É a marca registrada das mulheres sedutoras e de
          personalidade forte.
        </p>
      </>
    ),
    value: "0,00",
    img: "Deo_Colonia_Agua_de_Cheiro_Absinto_Feminino_100ml",
    active: true,
  },
  {
    id: 11,
    name: "Sabonete Íntimo Sensação Arruda Natu Life - 180g",
    url: "Sabonete_intimo_Sensacao_Arruda_Natu_Life_180g",
    description: (
      <>
        <p>
          Funções do produto: Contém associação de extratos naturais que
          proporcionam uma confortável higienização com leve sensação
          refrescante e de bem estar. Hipoalergênico e Ginecologiamente testado.
          Zona de aplicação: Região genital externa. Descrição: Possui
          formulação adequada para higienização íntima externa Modo de Usar:
          Aplicar uma pequena porção na palma da mão e lavar somente região
          genital externa. Enxaguar abundantemente
        </p>
      </>
    ),
    value: "0,00",
    img: "Sabonete_intimo_Sensacao_Arruda_Natu_Life_180g",
    active: true,
  },
  {
    id: 11,
    name: "Sabonete Íntimo Sensação Menta Natu Life - 180g",
    url: "Sabonete_intimo_Sensacao_Menta_Natu_Life_180g",
    description: (
      <>
        <p>
          Funções do produto: Contém associação de extratos naturais que
          proporcionam uma confortável higienização com leve sensação
          refrescante e de bem estar. Hipoalergênico e Ginecologiamente testado.
          Zona de aplicação: Região genital externa. Descrição: Possui
          formulação adequada para higienização íntima externa Modo de Usar:
          Aplicar uma pequena porção na palma da mão e lavar somente região
          genital externa. Enxaguar abundantemente
        </p>
      </>
    ),
    value: "0,00",
    img: "Sabonete_intimo_Sensacao_Menta_Natu_Life_180g",
    active: true,
  },
  {
    id: 12,
    name: "Sabonete Íntimo Sensação Morango Natu Life - 180g",
    url: "Sabonete_intimo_Sensacao_Morango_Natu_Life_180g",
    description: (
      <>
        <p>
          Funções do produto: Contém associação de extratos naturais que
          proporcionam uma confortável higienização com leve sensação
          refrescante e de bem estar. Hipoalergênico e Ginecologiamente testado.
          Zona de aplicação: Região genital externa. Descrição: Possui
          formulação adequada para higienização íntima externa Modo de Usar:
          Aplicar uma pequena porção na palma da mão e lavar somente região
          genital externa. Enxaguar abundantemente
        </p>
      </>
    ),
    value: "0,00",
    img: "Sabonete_intimo_Sensacao_Morango_Natu_Life_180g",
    active: true,
  },
  {
    id: 13,
    name: "Sabonete Íntimo Sensação Barbatimao Natu Life - 180g",
    url: "Sabonete_intimo_Sensacao_Barbatimao_Natu_Life_180g",
    description: (
      <>
        <p>
          Funções do produto: Contém associação de extratos naturais que
          proporcionam uma confortável higienização com leve sensação
          refrescante e de bem estar. Hipoalergênico e Ginecologiamente testado.
          Zona de aplicação: Região genital externa. Descrição: Possui
          formulação adequada para higienização íntima externa Modo de Usar:
          Aplicar uma pequena porção na palma da mão e lavar somente região
          genital externa. Enxaguar abundantemente
        </p>
      </>
    ),
    value: "0,00",
    img: "Sabonete_intimo_Sensacao_Barbatimao_Natu_Life_180g",
    active: true,
  },
  {
    id: 14,
    name: "Sabonete Íntimo Sensação Aroeira Natu Life - 180g",
    url: "Sabonete_intimo_Sensacao_Aroeira_Natu_Life_180g",
    description: (
      <>
        <p>
          Funções do produto: Contém associação de extratos naturais que
          proporcionam uma confortável higienização com leve sensação
          refrescante e de bem estar. Hipoalergênico e Ginecologiamente testado.
          Zona de aplicação: Região genital externa. Descrição: Possui
          formulação adequada para higienização íntima externa Modo de Usar:
          Aplicar uma pequena porção na palma da mão e lavar somente região
          genital externa. Enxaguar abundantemente
        </p>
      </>
    ),
    value: "0,00",
    img: "Sabonete_intimo_Sensacao_Aroeira_Natu_Life_180g",
    active: true,
  },
];
