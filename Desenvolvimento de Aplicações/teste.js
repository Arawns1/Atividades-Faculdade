/*let array = [1, 2, 3, 4]
console.log(array)
array.splice(1, 3, 'arroz', 'feijão', 'macarrão') //altera o array principal
console.log(array)

console.log(array.slice(2, 3)) // não altera o array principal
console.log(array)

//dividir o ano em trimestres
*/

/*
var meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]

var j = 0;
for(var i = 0; i < meses.length; i=i+3){
    j = j + 3;
  console.log(meses.slice(i, j));
}
*/

/*
var funcionarios = [
  {nome: "Luiz", idade: 62},
  {nome: "Pedro", idade: 32},
  {nome: "Carlos", idade: 42},
  {nome: "José", idade: 22},
]

var pessoasFiltradas = funcionarios.filter(function(valor){
    return valor.nome.length < 6
})

console.log(pessoasFiltradas)
*/

var produtos = [
  { id: 1, descricao: 'SmartPhone', categoria: 'Eletronico' },
  { id: 2, descricao: 'Notebook', categoria: 'Eletronico' },
  { id: 3, descricao: 'Geladeira', categoria: 'Eletrodomestico' }
]

var eletronico = produtos.filter(function (valor) {
  return valor.categoria == 'Eletronico'
})

console.log(eletronico)

let comida = ['pizza', 'hamburguer', 'pão', 'arroz']

comida.forEach(function (food) {
  console.log("comida:" + food)
})
