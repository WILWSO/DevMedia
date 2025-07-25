import espaguete from "/public/espaguete.jpg";
import lasanha from "/public/lasanha.jpg";
import ravioli from "/public/ravioli.jpg";
import capeletti from "/public/capeletti.jpg";
import nhoque from "/public/nhoque.jpg";
import bruschetta from "../../../public/bruschetta.jpg";
import carpaccio from "../../../public/carpaccio.jpg";
import paella from "../../../public/paella.jpg";
import ebiSpicy from "../../../public/ebi-spicy.jpg";
import aligot from "../../../public/aligot.jpg";
import fileMignon from "../../../public/file-mignon.jpg";
import picanha from "../../../public/picanha.png";
import bifeAncho from "../../../public/bife-ancho.jpg";
import tomahwankSteak from "../../../public/tomahawk-steak.jpg";
import primeRib from "../../../public/prime-rib.jpg";
import tiramisu from "../../../public/tiramisu.jpg";
import cheesecake from "../../../public/cheesecake.jpg";
import banoffee from "../../../public/banoffee.png";
import milFolhas from "../../../public/mil-folhas.jpg";
import pudim from "../../../public/pudim.jpg";
import cerveja from "../../../public/cerveja.jpg";
import refrigerante from "../../../public/refrigerante.jpg";
import suco from "../../../public/suco.jpg";
import whiskey from "../../../public/whiskey.jpg";
import agua from "../../../public/agua.jpg";
import saladaCeasar from "../../../public/salada-ceasar.jpg";
import saladaCaprese from "../../../public/salada-caprese.jpg";
import saladaWaldorf from "../../../public/salada-waldorf.jpg";
import saladaGrega from "../../../public/salada-grega.jpg";
import saladaNicoise from "../../../public/salada-nicoise.jpg";
import ensaladaMistaArgentina from "../../../public/ensalada_Mixta.jpg";
import nhoquesArgentinos from "../../../public/inhoques_argentino.jpg";
import asadoArgentino from "../../../public/asado_argentino.jpg";
import polentaArgentina from "../../../public/polentaArgentina.jpg";
import locroArgentino from "../../../public/Locro.jpg";

export const produtos = [
  {
    id: 1,
    nome: "Espaguete",
    categoria: "Massas",
    preco: 20.0,
    descricao:
      "Um delicioso espaguete que pode ser combinado com diversos molhos, como bolonhesa, carbonara, alho e oleo e pesto",
    imagem: espaguete,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 2,
    nome: "Lasanha",
    categoria: "Massas",
    preco: 25.0,
    descricao:
      "Uma maravilhosa lasanha com recheios variados como carne moída, frango, presunto e queijo, legumos e molho branco ou vermelho",
    imagem: lasanha,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 3,
    nome: "Ravioli",
    categoria: "Massas",
    preco: 24.25,
    descricao:
      "Uma massa recheada com diferentes ingredientes como queijo, carne, espinafre ou cogumelos",
    imagem: ravioli,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 4,
    nome: "Capeletti",
    categoria: "Massas",
    preco: 25.5,
    descricao:
      "Uma massa simples servida com diversos tipos de molhos como bolonhesa, carbonara, alfredo, pesto ou manteiga e sálvia",
    imagem: capeletti,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 5,
    nome: "Nhoque",
    categoria: "Massas",
    preco: 8.99,
    descricao:
      "Massa feita de farinha de trigo e ovos, servida com molhos simples ou elaborados como, manteiga e parmesão, frango ao creme ou camarão alho e oleo",
    imagem: nhoque,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 6,
    nome: "Bruschetta",
    categoria: "Entradas",
    preco: 9.2,
    descricao:
      "Prato original da Itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite",
    imagem: bruschetta,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 7,
    nome: "Carpaccio",
    categoria: "Entradas",
    preco: 32.0,
    descricao:
      "Prato de origem francesa, que leva fatias finas de salmão cru, alcaparras, queijo parmesão ralado e molho mostarda",
    imagem: carpaccio,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 8,
    nome: "Paella",
    categoria: "Entradas",
    preco: 65.0,
    descricao:
      "Um prato tipico do leste da Espanha, que leva arroz e frutos do mar como mariscos, polvo, camarões, mexilhões e lulas",
    imagem: paella,
    estacoes: ["Primavera", "Otoño", "Invierno"],
  },
  {
    id: 9,
    nome: "Ebi Spicy",
    categoria: "Entradas",
    preco: 62.0,
    descricao:
      "Prato tipico do Japão, que leva camarões empanados em massa tempurá, maionese e molho picante",
    imagem: ebiSpicy,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 10,
    nome: "Aligot",
    categoria: "Entradas",
    preco: 18.99,
    descricao:
      "Um irrestivel purê de batata francês com queijo gruyere e meia cura",
    imagem: aligot,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 11,
    nome: "Filé Mignon",
    categoria: "Carnes",
    preco: 41.99,
    descricao:
      "Com pouca gordura e fibras, além de muito macia, essa carne vai bem com diversos tipos de molhos",
    imagem: fileMignon,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 12,
    nome: "Picanha",
    categoria: "Carnes",
    preco: 35.99,
    descricao:
      "Uma execelente carne que tem uma capa de gordura e fibras generosas que acentuam o sabor e a maciez do corte",
    imagem: picanha,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 13,
    nome: "Bife Ancho",
    categoria: "Carnes",
    preco: 39.99,
    descricao:
      "Uma carne que tem um ótimo nível de marmoreio e um sabor delicado, podendendo ser feita tanto na grelha ou na frigideira",
    imagem: bifeAncho,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 14,
    nome: "Tomahawk Steak",
    categoria: "Carnes",
    preco: 159.99,
    descricao:
      "É uma carne que combina duas texturas e sabores diferentes em uma só peça, e pode ser feita na grelha ou no forno",
    imagem: tomahwankSteak,
    estacoes: ["Primavera", "Verano", "Otoño"],
  },
  {
    id: 15,
    nome: "Prime Rib",
    categoria: "Carnes",
    preco: 59.99,
    descricao:
      "Parte dianteira da costela bovina, muito suculenta e saborosa, que pode ser feita na grelha ou no forno",
    imagem: primeRib,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 16,
    nome: "Tiramisu",
    categoria: "Sobremesas",
    preco: 15.99,
    descricao:
      "Sobremesa italiana que leva pão de ló, café, queijo mascarpone, ovos, açucar e cacau em pó",
    imagem: tiramisu,
    estacoes: ["Primavera", "Verão", "Outono"],
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 17,
    nome: "Cheesecake",
    categoria: "Sobremesas",
    preco: 8.99,
    descricao:
      "Típica sobremesa dos Estados Unidos, que leva bolo, cream cheese e calda de frutas",
    imagem: cheesecake,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 18,
    nome: "Banoffee",
    categoria: "Sobremesas",
    preco: 9.99,
    descricao:
      "Uma sobremesa inglesa, feita a base de biscoito triturado com manteiga, uma camada de doce de leite, banana fatiada e chantilly",
    imagem: banoffee,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 19,
    nome: "Mil-folhas",
    categoria: "Sobremesas",
    preco: 9.99,
    descricao:
      "Sobremesa de origem francesa, feita com massa folhada crocante e recheio cremoso de baunilha, chocolate ou frutas e açucar de confeiteiro",
    imagem: milFolhas,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 20,
    nome: "Pudim",
    categoria: "Sobremesas",
    preco: 5.99,
    descricao:
      "Sobremesa cremosa e gelada muito popular no Brasil, feita com leite condesado, leite e ovos",
    imagem: pudim,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 21,
    nome: "Cerveja Artesanal",
    categoria: "Bebidas",
    preco: 12.99,
    descricao:
      "Cerveja artesanal de produção alemã que leva ingredientes nobres como malte, lúpulu, água e levedura ",
    imagem: cerveja,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 22,
    nome: "Refrigerante",
    categoria: "Bebidas",
    preco: 7.99,
    descricao:
      "Um refrescante refrigerante de cola com pequenos pedaços de limão e raspas de hortelã",
    imagem: refrigerante,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 23,
    nome: "Suco",
    categoria: "Bebidas",
    preco: 6.99,
    descricao:
      "Mais puro suco de laranjas holandesas frescas e levemente adocicada",
    imagem: suco,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 24,
    nome: "Whiskey",
    categoria: "Bebidas",
    preco: 17.99,
    descricao:
      "Um poderoso whiskey sabor bourbon, envelhecido em barris de carvalho branco carbonizado",
    imagem: whiskey,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 25,
    nome: "Água",
    categoria: "Bebidas",
    preco: 4.99,
    descricao: "Água mineral saborizada com limão siciliano",
    imagem: agua,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 26,
    nome: "Salada Ceasar",
    categoria: "Saladas",
    preco: 19.8,
    descricao:
      "Salada preparada com alface-romana, torrada, queijo parmesão e molho Ceasar",
    imagem: saladaCeasar,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 27,
    nome: "Salada Caprese",
    categoria: "Saladas",
    preco: 22.0,
    descricao:
      "Uma salada italiana, feita com mussarela fresca, tomate e manjericão, temperada com sal e azeite",
    imagem: saladaCaprese,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 28,
    nome: "Salada Waldorf",
    categoria: "Saladas",
    preco: 40.0,
    descricao:
      "Criada em 1893 no Waldorf Hotel, essa salada leva maçã verde fatiada e apio banhados ao suco de limão, nozes cortadas, maionese",
    imagem: saladaWaldorf,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 29,
    nome: "Salada Grega",
    categoria: "Saladas",
    preco: 13.99,
    descricao:
      "Versão original da salada que leva tomate, pepino, pimentão, cebola roxa, pimenta-do-reino, orégano, azeite e queijo feta",
    imagem: saladaGrega,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 30,
    nome: "Salada Niçoise",
    categoria: "Saladas",
    preco: 22.99,
    descricao:
      `Salada tradicional da cidade de Nice, feita com tomate, ovos cozidos, 
      azeitona niçoise, azeite e atum"`,
    imagem: saladaNicoise,
    estacoes: ["Primavera", "Verano", "Otoño"],
  },
  {
    id: 31,
    nome: "Salada Mista Argentina",
    categoria: "Saladas",
    preco: 25.99,
    descricao:
      "Salada argentina feita com alface, tomate e cebola, manjericão à gosto.",
    imagem: ensaladaMistaArgentina,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
    id: 32, 
    nome: "Nhoques Argentinos",
    categoria: "Massas",
    preco: 37.99,
    descricao:
      `Tradicional massa argentina de batata inglesa, leve e macia, feita artesanalmente 
      e servida com molho à sua escolha: quatro queijos cremoso, vermelho de tomate ou ragu de carne. 
      Acompanha queijo parmesão ralado.`,
    imagem: nhoquesArgentinos,
    estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
  },
  {
  id: 33,
  nome: "Assado Argentino em tiras",
  categoria: "Carnes",
  preco: 67.99,
  descricao:
    `Costela bovina assada lentamente na brasa, temperada apenas com sal grosso e servidos ao ponto perfeito.`,
  imagem: asadoArgentino,
  estacoes: ["Primavera", "Verano", "Otoño", "Invierno"],
},
{
  id: 34,
  nome: "Polenta à Moda Argentina",
  categoria: "Tipicas",
  preco: 40.99,
  descricao:
    `Quatro camadas intercaladas de polenta amanteigada, ragù argentino de carne lentamente cozida ao molho 
    de tomates frescos e uma combinação de queijos derretidos. Finalizada ao forno com cobertura gratinada 
    e um toque de ervas`,
  imagem: polentaArgentina,
  estacoes: ["Otoño", "Invierno"],
},
{
  id: 35,
  nome: "Locro Crioulo Argentino",
  categoria: "Tipicas",
  preco: 27.99,
  descricao:
    `Feito com milho branco, feijão, abóbora, linguiça artesanal, costelinha suína e carne bovina cozida lentamente 
    até atingir sabor e textura marcantes. Rústico, acolhedor e cheio de história — um prato para aquecer corpo e alma.`,
  imagem: locroArgentino,
  estacoes: ["Invierno"],
},
];