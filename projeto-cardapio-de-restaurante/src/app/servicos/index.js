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