import { produtos } from '../data/data_produtos.js';

export const getProdutos = (textoDigitado) => { 
    return produtos.filter((produto) => 
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || 
        produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLowerCase()) 
    );
    // Retorna todos os produtos que contenham o texto de busca parcial ou total. 
    // A busca ocorre nos campos do nome ou da descrição, independentemente de maiúsculas ou minúsculas 
};

export const getProdutosPorCategoria = (categoria) => {
    return produtos.filter((produto) => 
        produto.categoria === categoria
    );
    // Retorna todos os produtos que pertencem à categoria especificada.
};

export const getEntradas = getProdutosPorCategoria('Entradas');
    // Retorna todos os produtos que pertencem à categoria 'Entradas'.

export const getProdutosPorEstacao = (estacao) => {
    if (!estacao) return []; // Se não houver estação especificada, retorna um array vazio.
    return produtos.filter(produto => Array.isArray(produto.estacoes) && // Verifica se o produto possui um array de estações e se a estação especificada está incluída.
        produto.estacoes.includes(estacao)); 
    // Retorna todos os produtos que pertencem à estação especificada.
};

export const getEstacao = getProdutosPorEstacao('');
    // Começa o site com todos os produtos indiferente da estacao.

const Fecha = new Date(); // Cria uma nova data para obter o mês atual
const mesActual = Fecha.getMonth() + 1; // Obtém o mês atual (0-11
const diaActual = Fecha.getDate(); // Obtém o dia atual (1-31)

export const estacaoAtual = () => { // Função para determinar a estação atual com base no mês e dia
    if ((mesActual === 9 && diaActual >= 21) || (mesActual === 10) || (mesActual === 11) || (mesActual === 12 && diaActual < 21)) {
      return "Primavera"; // Primavera de 21 de setembro a 20 de dezembro. 
    }
    if ((mesActual === 12 && diaActual >= 21) || (mesActual === 1) || (mesActual === 2) || (mesActual === 3 && diaActual < 21)) {
      return "Verano"; // Verão de 21 de dezembro a 20 de março.
    }
    if ((mesActual === 3 && diaActual >= 21) || (mesActual === 4) || (mesActual === 5) || (mesActual === 6 && diaActual < 21)) {
      return "Otoño"; // Outono de 21 de março a 20 de junho.
    }
    if ((mesActual === 6 && diaActual >= 21) || (mesActual === 7) || (mesActual === 8) || (mesActual === 9 && diaActual < 21)) {
      return "Invierno"; // Inverno de 21 de junho a 20 de setembro.
    }
  }; 