# Exercícios de Fixação de Javascript - Treino 2 🏋🏽‍♀️

## nunciado
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

### Resolução

```javascript
function calculaPrecoTotal(quantidade) {
  let precoMaca
  if(quantidade < 12) {
    precoMaca = 1.30
  } else {
    precoMaca = 1
  }
  const precoTotal = quantidade * precoMaca
  return precoTotal
}
```