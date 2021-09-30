
//Criar uma variável com arrays de objetos
let produtos = [
  {
    nome: 'Notebook',
    valor: 1600,
    qualidade: 7,
    status: true
  },
  {
    nome: 'Teclado Mecânico',
    valor: 180,
    qualidade: 5,
    status: false
  },
  {
    nome: 'Cadeira Gamer',
    valor: 999,
    qualidade: 9,
    status: true
  },
  {
    nome: 'HeadPhone',
    valor: 282,
    qualidade: 8,
    status: true
  },
  {
    nome: 'Macbook',
    valor: 6.800,
    qualidade: 9,
    status: false
  },
  {
    nome: 'Desktop',
    valor: 1400,
    qualidade: 5,
    status: true 
  }
];

//criar uma variável, pegar os produtos, utilizar o filter com uma função callback
let carrinho = produtos.filter((produto) => {
  return produto.valor >= 480 &&
  produto.valor <= 1600 && 
  produto.qualidade > 6 &&
  produto.status === true
  
});

//Criar uma variável, somar valor dos produtos do carrinho com o metodo reduce()
let somarValorDoCarrinho = carrinho.reduce((acumulador, preco) => {
 return acumulador.valor + preco.valor;
});

let mostrarItensDoCarrinho = carrinho.map((item)=>{

  return `${item.nome} ${item.valor}`;

});

console.log(`Seu carrinho contém os seguintes produtos: ${mostrarItensDoCarrinho}`);
console.log(`E o valor total a ser pago é: ${somarValorDoCarrinho}`);

