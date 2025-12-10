const data = [
  {
    id: 1,
    nome_museum: "Museu do Prado",
    cidade: "Madrid",
    pais: "Espanha",
    image_museum: [
      "https://i1.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2019/08/ingresso-museu-do-prado.jpg?resize=1200%2C856&ssl=1",
      "https://www.flipar.com.br/wp-content/uploads/2024/11/Museu-do-Padro-5_Easy-Resize.com_.jpg?20241119092702",
      "https://tr1.traventia.com/migrated/imghash/0b887579760ffcd6994e007ed1a3e681.jpg",
      "https://tr1.traventia.com/migrated/imghash/41a3e792f7e8351ceeec2a1d7775af53.jpg",
      "https://turistaprofissional.com/wp-content/uploads/2017/08/museu-em-madri.jpg",
    ],
    url_video_museum: [
      "https://youtu.be/lgj7nOgrIsE?si=iT6LxPSRVdDk2sgA",
      "https://youtu.be/PYle1utoK_g?si=8ZaGjC6eozn2mmvb",
      "https://youtu.be/AUVtXBWeBmk?si=WT2YAkjUWae8FRw-",
    ],
    descricao_museum:
      "O Museu do Prado, localizado em Madrid, Espanha, é um dos museus de arte mais renomados do mundo. Fundado em 1819, abriga uma vasta coleção de obras-primas europeias.",

    exposicao_artistas: [
      {
        id: 1,
        nome_artista: "Diego Velázquez",
        url_img_artista: [
          "https://biografieonline.it/img/bio/Diego_Velazquez_1.jpg",
          "https://images.metmuseum.org/CRDImages/ep/original/DP221248.jpg",
          "https://cdn.britannica.com/49/135049-050-60B2F157/Diego-Velazquez-portrait-engraving.jpg",
          "https://i.pinimg.com/originals/7d/8a/8a/7d8a8a7d8469ef1e40bd6b1b55d53421.jpg",
        ],
        url_video_artista: [
          "https://youtu.be/y8YbfoWcvAo?si=RwK5xaNXHAzF66MX",
          "https://youtu.be/eg1U6vIUGgc?si=mIFokkKL2smtmERx",
        ],
        obras: [
          {
            id: 1,
            nome_obra: ["Las Meninas"],
            url_imagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/500px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
              url_outrasFotos: [
                "https://d2jv9003bew7ag.cloudfront.net/uploads/Las-Meninas-at-Museo-del-Prado.jpg",
                "https://media.quincemil.com/imagenes/2022/10/14132001/Captura-de-Pantalla-2022-10-14-a-las-11.19.46-860x1024.jpg",
                "https://proceso.hn/wp-content/uploads/2023/02/Las-Meninas-696x454.jpg",
                "https://masterapollon.com/wp-content/uploads/2024/10/Las-Meninas-%E2%80%93-Diego-Velazquez-510x510.png",
              ],
            },
            url_videos_obra: [
              "https://youtu.be/HqBdveGzGFg?si=GLpY-5mJWWa_deSJ",
              "https://www.instagram.com/reel/C6vbdAsAc4p/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/reel/DNkbF0PKPWe/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/reel/C2juCBJA6n-/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/p/BlAd6i6BOab/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://www.bbc.com/portuguese/geral-50472322",
              "https://www.culturagenial.com/quadro-as-meninas-velazquez/#goog_rewarded",
            ],
            bloco_texto: [
              "Las Meninas é uma das obras mais famosas do pintor espanhol Diego Velázquez, criada em 1656. ",
              "A pintura retrata uma cena complexa e enigmática no interior do palácio real, onde a infanta Margarida Teresa está cercada por suas damas de companhia, um anão e um cão. Velázquez também se inclui na obra, pintando a cena enquanto olha para o espectador.",
              "A composição é notável pela sua perspectiva inovadora e pelo uso magistral da luz e sombra, criando uma sensação de profundidade e realismo.",
              "Las Meninas é frequentemente interpretada como uma reflexão sobre a arte, a percepção e o papel do artista na sociedade.",
            ],
          },
          {
            nome_obra: ["El triunfo de Baco", "Los borrachos"],
            id: 2,
            url_imagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vel%C3%A1zquez_-_El_Triunfo_de_Baco_o_Los_Borrachos_%28Museo_del_Prado%2C_1628-29%29.jpg/330px-Vel%C3%A1zquez_-_El_Triunfo_de_Baco_o_Los_Borrachos_%28Museo_del_Prado%2C_1628-29%29.jpg",
              url_outrasFotos: [
                "https://zonacero.com/sites/default/files/2020/6/04/fotos/museo_el_prado_reabre_-14.jpg",
                "https://media.gettyimages.com/id/71134224/photo/spanish-painter-pablo-picassos-three-musicians-and-the-triumph-of-bacchus-by-diego-velazquez.jpg?s=612x612&w=gi&k=20&c=Mff6VRyc8guq3N62fsb10fl_PNXT02qR92sVz5GEYtQ=",
              ],
            },
            url_videos_obra: [
              "https://www.instagram.com/p/B-HEpZ3AkTw/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/reel/Clf9UR1AynO/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/reel/C4dz0hKLCr0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://lacamaradelarte.com/obra/el-triunfo-de-baco/",
              "https://www.culturagenial.com/quadro-as-meninas-velazquez/#goog_rewarded",
            ],
            bloco_texto: [
              "1628 - 1629. Óleo sobre tela, 165 x 225 cm Sala 010 O pagamento, em julho de 1629, de 100 ducados a Velázquez por conta de uma pintura de Baco que havia feito para o rei nos informa sobre a data aproximada da obra e identifica o seu destinatário. ",
              "Estamos às vésperas da primeira viagem do pintor à Itália, quando levava pouco mais de um lustro de trabalho a serviço do rei e acabava de conhecer Rubens. Nessa época, estava se especializando na pintura de retratos, embora há pouco tivesse realizado um afamado quadro de caráter histórico, La expulsión de los moriscos, e possuía uma notável experiência em cenas religiosas e de costumes.",
              " Era a primeira vez que se enfrentava a uma fábula mitológica, e para isso recuperou gamas cromáticas, métodos descritivos e tipos humanos próprios de seus anos sevilhanos, que convivem com importantes novidades formais.",
              " Essas circunstâncias transformam Los borrachos em uma obra fronteiriça, que inaugura uma temática presente até os últimos anos da carreira do pintor e, ao mesmo tempo, mantém numerosas dívidas com o seu passado. ",
              "O personagem principal é Baco, que deu ao pintor a oportunidade de representar um de seus primeiros nus masculinos, dominando a composição com a luminosidade de seu corpo e de suas vestes.",
              " À esquerda, um sátiro nu levanta uma fina taça de cristal e nos situa no mundo dos seres e das histórias fabulosas, enquanto à direita se aglomeram um mendigo e quatro homens de capas pardas, rostos curtidos e expressão embriagada, que constituem um contraponto cotidiano, verídico e realista. ",
              "Diante deles interpõe-se a figura de um jovem ajoelhado que está sendo coroado pelo deus. Como é frequente na produção narrativa de Velázquez, existe nesta obra uma ambiguidade significativa que deu lugar a numerosas especulações sobre o conteúdo profundo do quadro. Tradicionalmente, chamou-se a atenção para a vontade realista com que estão descritos os personagens da direita, o que deu margem a uma leitura da cena como uma desmitificação da fábula clássica e, inclusive, uma burla da Antiguidade.",
            ],
          },
          {
            id: 3,
            nome_obra: ["Las Lanzas", "La rendición de Breda"],
            url_imagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vel%C3%A1zquez_-_de_Breda_o_Las_Lanzas_%28Museo_del_Prado%2C_1634-35%29.jpg/960px-Vel%C3%A1zquez_-_de_Breda_o_Las_Lanzas_%28Museo_del_Prado%2C_1634-35%29.jpg",
              url_outrasFotos: [
                "https://www.antiguedadeselapano.com/wp-content/uploads/2022/09/9836.jpg",
                "https://s2.abcstatics.com/media/cultura/2021/03/18/SoldadoEfe-U20381327567Ofb-1248x698@abc.jpg",
                "https://i.pinimg.com/originals/40/80/d0/4080d05af2453fe238929bfd00ee2ff8.jpg",
                "https://s1.abcstatics.com/media/cultura/2022/05/28/lanzas1-igil-k8DC-U38535367486JZF-1248x698@abc.jpg",
                "https://th.bing.com/th/id/R.36b14580552a2b7677a2ce1d13620108?rik=pnrHq%2ffozL3qJg&riu=http%3a%2f%2fwww.feelmadrid.com%2fphoto063.jpg&ehk=x4LTqtExilk6fWcjonhTvRGV6afolMAjvBhjB%2bVuKl8%3d&risl=&pid=ImgRaw&r=0",
                "https://imagenes.elpais.com/resizer/P39PEkJR4wx_2cb6fZQbCM5ntlo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/X5CYPC7FAJAMNFDL3J4ONKOBS4.jpg",
              ],
            },
            url_videos_obra: [
              "https://youtu.be/XFrmSTVW3Ns",
              "https://www.instagram.com/reel/DJquiQTAfGR/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
              "https://www.instagram.com/reel/CeYgU1AArNi/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://www.museodelprado.es/actualidad/multimedia/las-lanzas-o-la-rendicion-de-breda-velazquez/927265db-4827-b737-08c0-6c2bf722764b",
              "https://www.unprofesor.com/ciencias-sociales/la-rendicion-de-breda-comentario-y-analisis-6690.html",
            ],
            bloco_texto: [
              "  Contexto Histórico em que esta obra artistica foi criada é referente ao dia 5 de junho do ano de 1625,quando o governador holandês Justino de Nassau entregou as chaves de Breda ao general genovês Ambrosio Spínola após um longo cerco.",
              " Este foi um evento militar de grande importância estratégica na luta entre a monarquia hispânica e as Províncias Unidas.  A Encomenda Artística em relação a cena foi selecionada para decorar o Salón de Reinos do Palacio del Buen Retiro durante o reinado de Felipe IV. ",
              "Giego Velázquez, o pintor mais prestigioso da corte, foi escolhido para representá-la, criando uma das obras mais célebres do período. ",
              " As Características Inovadoras da Obra são contrariamente aos quadros bélicos convencionais, Velázquez não glorifica a vitória de forma panegírica. ",
              "Em vez disso: Mostra a realidade da guerra (fundo com destruição e morte) Concentra-se no gesto humano: o general vencedor recebendo a chave do vencido de forma quase afetuosa Transmite a mensagem de paz e magnanimidade, não apenas derrota militar.",
              " E o Significado Político da obra reflete a imagem que a monarquia espanhola queria projetar: uma instituição justa que respeitava as leis da guerra e podia tratar o vencido com clemência. ",
              " Este conceito estava alinhado com outras obras da época, como a comédia de Calderón. ",
              " A Genialidade Artística de Diego Velázquez conseguiu transmitir um conteúdo político complexo através de meios simples e eficazes: o gesto dos dois generais encerra uma teoria do Estado e uma visão histórica, sem necessidade de retórica excessiva. ",
            ],
          },
        ],
      },
      {
        id: 2,
        nome_artista: "Francisco Goya",
        url_img_artista: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg/500px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg",
          "https://escolaeducacao.com.br/wp-content/uploads/2019/10/francisco-de-goya.jpeg",
        ],
        url_video_artista: [
          "https://youtu.be/PQi4O3fL1dk?si=CzpFw3IU0yLxIrdy",
          "https://youtu.be/SuEZVSmCGI4?si=gfuAec8k8fGxWnMk",
        ],
        obras: [
          {
            id: 4,
            nome_obra: ["La Maja Desnuda"],
            url_imagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Goya_Maja_naga2.jpg/960px-Goya_Maja_naga2.jpg",
              url_outrasFotos: [
                "https://content3.cdnprado.net/imagenes/proyectos/personalizacion/7317a29a-d846-4c54-9034-6a114c3658fe/cms/goya_la_maja_desnuda_sala_37.jpg",
                "https://i.ytimg.com/vi/7yAk46mP3X0/maxresdefault.jpg",
                "https://es-academic.com/pictures/eswiki/71/Goya_at_the_Prado%2C_Madrid.jpg",
                "https://noticiasparamunicipios.com/wp-content/uploads/2022/02/EuropaPress_2964285_pinturas_goya_maja_desnuda_maja_vestida_museo_nacional_prado_vacio_cierre-scaled.jpg",
                "https://i.pinimg.com/736x/20/a8/53/20a853224a528406ccc00434b5038cfd.jpg",
                "https://metro.co.uk/wp-content/uploads/2023/10/MUSEO-DEL-PRADO_GOYA_LA-MAJA_A7B8061_2018%C2%A9BELEN-IMAZ_Comunidad-de-Madrid-4d6b.jpg?quality=90&strip=all&zoom=1&resize=540%2C360",
                "https://s.yimg.com/ny/api/res/1.2/fXm20XZcrtSjWYDMOp80yg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/hd/cp-video-transcode/production/35bbaea8-9930-35a9-93b4-6b845e7b5875/2022-11-05/18-24-43/c28c1054-6106-58b3-909b-ee152a76568d/stream_1920x1080x0_v2_3_0.jpg",
              ],
            },
            url_videos_obra: [
              "https://youtu.be/XxqnwugTGH4?si=G4BGvdCzVX_F3TpV",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://www.museodelprado.es/coleccion/obra-de-arte/la-maja-vestida/8e7f5b6b-3f4e-4f5e-8e7f-5b6b3f4e5f6e",
              "https://www.culturagenial.com/quadro-a-maja-vestida-goya/#goog_rewarded",
            ],
            bloco_texto: [
              "A Maja despida é uma pintura icônica do artista espanhol Francisco Goya, criada entre 1797 e 1800. A obra retrata uma mulher jovem e elegante, conhecida como 'maja', vestida com roupas tradicionais espanholas da época. A figura está sentada de maneira relaxada, com um olhar direto e confiante, transmitindo uma sensação de naturalidade e autenticidade.",
              "A pintura é notável por sua técnica refinada, uso habilidoso da luz e sombra, e pela representação realista dos detalhes das roupas e acessórios da maja. A obra é frequentemente comparada à sua contraparte, 'A Maja Desnuda', que apresenta a mesma figura em estado de nudez, destacando a dualidade entre a modéstia e a sensualidade.",
              "A Maja Vestida é considerada uma das obras-primas de Goya e um exemplo significativo do retrato na arte espanhola do século XVIII. Atualmente, a pintura está em exibição no Museu do Prado, em Madrid, onde continua a atrair admiradores de todo o mundo.",
            ],
          },
          {
            id: 5,
            nome_obra: ["El 3 de mayo de 1808", "Los fusilamientos"],
            url_imgagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg/330px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg",
              url_outrasFotos: [
                "https://i.pinimg.com/736x/de/7d/14/de7d148d186506def50459b9c7957bc9.jpg",
                "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1652889132/post_images/madrid-121/obras-museo-del-prado/109757109_0a20737ea9_o_Cropped.jpg",
                "https://images.ladepeche.fr/api/v1/images/view/5c176de13e45465287650b04/large/image.jpg",
                "https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2000/09/barcelo-miguel-artista-apuntes-ineditos-museo-prado-featured.jpg",
                "https://artexplainedsimply.com/wp-content/uploads/2025/03/Francisco-Goyas-The-Third-of-May-1808-3-768x432.jpg",
              ],
            },
            url_videos_obra: [
              "https://www.instagram.com/reel/C6dO_f8AInI/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://www.museodelprado.es/coleccion/obra-de-arte/el-3-de-mayo-de-1808/ed3184f1-42f6-4e5e-8ed3-184f142f64f6",
              "https://www.culturagenial.com/quadro-o-3-de-maio-de-1808-goya/#goog_rewarded",
            ],
            bloco_texto: [
              "El 3 de mayo de 1808 es una pintura emblemática del artista español Francisco Goya, creada en 1814. La obra representa un momento trágico durante la ocupación napoleónica de España, específicamente la ejecución de civiles españoles por parte de las tropas francesas en represalia por un levantamiento popular en Madrid el 2 de mayo de 1808.",
              "La composición se centra en un grupo de hombres españoles, algunos con las manos atadas, que están siendo fusilados por soldados franceses. La figura central, iluminada dramáticamente, levanta los brazos en un gesto de desesperación y resistencia, simbolizando el sufrimiento y la valentía del pueblo español frente a la opresión.",
              "Goya utiliza un estilo expresionista y una paleta oscura para transmitir la brutalidad y el horror del evento. La obra es considerada una denuncia poderosa contra la guerra y la violencia, y es una de las pinturas más reconocidas de Goya. Actualmente, El 3 de mayo de 1808 se encuentra en el Museo del Prado en Madrid, donde continúa siendo una obra de gran impacto emocional y artístico.",
            ],
          },
          {
            id: 6,
            nome_obra: ["Saturno"],
            url_imgagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/330px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
              url_outrasFotos: [
                "https://1.bp.blogspot.com/-8fNpDa51ZgY/YJpzUMXoOdI/AAAAAAAAVTQ/qfp5mHTEFIkwD3erEXuQ0lZ4EzLCCMLugCLcBGAsYHQ/s16000/saturno-devorando-a-un-hijo-goya-pinturas-negras-museo-del-prado-madrid-rubens-495.jpg",
                "https://i.ytimg.com/vi/TbmHhblUYfc/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHWBIAC4AOKAgwIABABGH8gSyguMA8=&rs=AOn4CLAr0OnnvFrtkAlDp3TrNb-QJ5uQdA",
                "https://www.postposmo.com/wp-content/uploads/2021/01/SATURNO-DEVORANDO-A-SUS-HIJOS-3.jpg",
                "https://masterful-artists.com/wp-content/uploads/2025/03/Francisco_de_Goya_Saturno_devorando_a_su_hijo_1819-1823-e1741689310847.jpg",
              ],
            },
            url_videos_obra: [
              "https://youtube.com/shorts/5PfssMCZ8KU?si=iRbP8FlsGuPhoWwR",
              "https://youtu.be/ZZNxzoOH4Q4?si=PMGRiRwgbenkgO2b",
              "https://youtu.be/3Lawz8TcPig?si=QI8SyzA1UB3efsX2",
              "https://youtu.be/AOvM5KLDFeo?si=iWAdAgz1I3h5IUEV",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://aventurasnahistoria.com.br/noticias/reportagem/saturno-devorando-um-filho-historia-por-tras-da-sombria-obra-de-goya.phtml",
              "https://unusmundus.academiaabc2.org.br/breve-analise-da-obra-saturno-devorando-a-um-filho-francisco-de-goya/",
            ],
            bloco_texto: [
              "O conjunto de catorze cenas ao qual pertence esta obra se popularizou com o título de Pinturas Negras, pelo uso que nelas se fez de pigmentos escuros e negros e, igualmente, pela sombriedade dos temas.",
              " Decoravam duas salas, nos andares inferior e superior, da conhecida como Quinta del Sordo, casa de campo nos arredores de Madrid, junto ao rio Manzanares, já conhecida por esse nome antes de sua aquisição por Goya em 1819. ",
              "Existem fotografias do conjunto in situ, realizadas por volta de 1873 pelo fotógrafo francês Jean Laurent (1816-1886), e incluídas pela primeira vez no catálogo do Museo del Prado de 1900. ",
              "A casa foi demolida por volta de 1909. ",
              "As Pinturas Negras foram pintadas diretamente sobre a parede seca, não a fresco, e na mistura dos pigmentos utilizou-se o óleo. Anteriormente, em alguns dos painéis dos muros, em ambos os pisos, havia outras cenas de difícil interpretação, possivelmente paisagens de colorido claro com pequenas figuras, reveladas pelas imagens radiográficas feitas no Museo del Prado em 1983.",
            ],
          },
        ],
      },
      {
        id: 3,
        nome_artista: "El Greco",
        url_img_artista: [
          "https://th.bing.com/th/id/R.4b747fbee99de05ae09dd695b5782597?rik=i0BFJvUOTLUa9w&riu=http%3a%2f%2ftotallyhistory.com%2fwp-content%2fuploads%2f2012%2f06%2fportrait-of-the-artist-s-son-jorge-manuel-theotokopoulos-El-Greco.jpg&ehk=pXVLSmFH07oJeMQI57gFz773JodTBdx7jyGujfe%2fqKA%3d&risl=&pid=ImgRaw&r=0",
          "https://th.bing.com/th/id/R.bf81fc4e14b1173589c1bf64a517b489?rik=mJ7tm4Rxxjuipw&pid=ImgRaw&r=0",
        ],
        url_video_artista: [
          "https://youtu.be/Irkf1FgQXe0?si=YsQSTc6BGIRojbqA",
          "https://youtu.be/voCKly-jGsk?si=Fz3FBUYj_M6G7XBu",
          "https://youtu.be/c8DRS58Z2wA?si=7apYILC_JA7IC8-K",
        ],
        obras: [
          {
            id: 7,
            nome: ["El entierro del Conde de Orgaz"],
            url_imgagens: {
              url_img_obra:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/El_entierro_del_se%C3%B1or_de_Orgaz_-_El_Greco.jpg/330px-El_entierro_del_se%C3%B1or_de_Orgaz_-_El_Greco.jpg",
              url_outrasFotos: [
                "https://smarthistory.org/wp-content/uploads/2015/08/ElGreco-CountOrgaz-Full-300x261.jpg",
                "https://www.leyendasdetoledo.com/wp-content/uploads/2010/01/greco-entierro-orgaz-toledo-1024x1024.jpg",
                "https://santotome.org/wp-content/uploads/elementor/thumbs/Santo-Tome-88-qgczovwijuvbvmfzul8qfwo0mp656eg2z88kb03tlk.jpg",
                "https://images.mnstatic.com/cb/7a/cb7ac228b1e1027793597c15842b5ccf.jpg?quality=75&format=png&fit=crop&width=980&height=880&aspect_ratio=980:880",
                "https://media.istockphoto.com/id/1847783320/photo/tourists-observing-the-painting-by-el-greco-the-burial-of-the-count-of-orgaz-an-oil-painting.jpg?s=612x612&w=0&k=20&c=NiQxX55uPNq4q1uQULlwnWJ2cW-OVuURbUJEwqqTw-E=",
                "https://rsbestofspain14days2024.weebly.com/uploads/1/4/4/3/144322399/1000014374.jpg",
                "https://res.klook.com/image/upload/activities/jlglwstjxc3y9i3tffgv.jpg",
              ],
            },
            url_videos_obra: [
              "https://youtu.be/xYGisil4ay0?si=ZqSFtQmTPd3gn12u",
              "https://youtu.be/DLPslIBkXaQ?si=DIg1FtWv1duPfceb",
              "https://youtu.be/BgwCJNuP5Yk",
            ],
            url_sites_mais_detalhes_sobre_a_obra: [
              "https://historia-arte.com/obras/el-entierro-del-conde-de-orgaz",
              "https://oscardambrosio.com.br/textos/198/o-enterro-do-conde-orgaz-de-el-greco",
            ],
            bloco_texto: [
              "O Enterro do Conde de Orgaz, organizado por tópicos: Obra: O Enterro do Conde de Orgaz (em espanhol: El entierro del Conde de Orgaz) é uma pintura a óleo sobre tela. ",
              "Autor: El Greco (Domenikos Theotokopoulos). Data e Estilo: Pintada em 1587, é uma obra fundamental do Maneirismo. Localização: Encontra-se na Igreja de São Tomé, em Toledo, Espanha, local para o qual foi originalmente encomendada. ",
              " Tema: Representa o milagre lendário do enterro de Gonzalo Ruiz de Toledo, Senhor de Orgaz. ",
              " História O Senhor de Orgaz: Gonzalo Ruiz de Toledo foi um benfeitor da paróquia de São Tomé, falecido em 1323. ",
              " Deixou em testamento uma doação anual à igreja que devia ser paga pelos habitantes da vila. ",
              "A Lenda: A tradição narra que, durante o enterro de Gonzalo Ruiz em 1327, Santo Estêvão e Santo Agostinho desceram do céu para colocar pessoalmente o corpo na sepultura.",
              " Encomenda e Pagamento: O contrato foi assinado em 1586, estipulando detalhadamente a iconografia da parte inferior. ",
              "Houve disputas sobre o valor da obra, com avaliações divergentes, mas a dívida foi saldada em 1590 após El Greco renunciar a um apelo ao Papa.",
              " Dimensão Teológica Dualidade: O quadro divide-se em duas dimensões: a inferior (morte/terrena) e a superior (céu/vida eterna). ",
              " Significado: El Greco retrata o horizonte da vida perante a morte, iluminado por Cristo.",
              " A morte é apresentada como um parto doloroso mas cheio de esperança para a luz eterna. ",
              "Conexão: A alma imortal do Senhor de Orgaz é representada como um feto/criança, transportada por um anjo através de uma 'vulva materna' (nuvens) para o céu. ",
              "Os Personagens A obra mistura personagens celestiais e retratos de contemporâneos de El Greco (anacronismo deliberado). A Parte Terreal (Inferior): Cena: O enterro solene com expressões de luto e seriedade. ",
              "A Criança: No canto inferior esquerdo, o filho de El Greco, Jorge Manuel, aponta para a cena. ",
              "Do seu bolso sai um papel com a assinatura do pintor e a data de nascimento do menino (1578). ",
              " Santos: Santo Estêvão (jovem, à esquerda) e Santo Agostinho (ancião com barba, à direita) sustentam o corpo do Conde. O Conde de Orgaz: Representado com uma armadura luxuosa ao centro.",
            ],
          },
        ],
      },
    ],
  },
];

export default data;
