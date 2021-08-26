Você foi contratado/a para fazer o sistema de cálculo de notas de uma escola. Crie uma função que receba 3 parâmetros: nota da primeira prova (`p1`), nota da segunda prova (`p2`) e nota dos exercícios (`ex`).

Seus sistema deve calcular a média ponderada desses três valores, onde os exercícios tem peso 1, a primeira prova tem peso 2 e a segunda prova tem peso 3.

Ao final, você deve retornar um conceito (A, B, C, D):

*Se a média for maior ou igual a 9, retorne o conceito A
*Se a média for menor que nove e maior ou igual a 7.5, retorne B
*Se a média for menor que 7.5 e maior ou igual a 6, retorne C
*Se a média for menor que 6, retorne D

```javascript
function calculaNota(ex, p1, p2) {
  let media = ((ex + (p1 * 2) + (p2 * 3))/6)
  let conceito = ""
  if(media >= 9) {
    conceito = "A"
  } else if(media >= 7.5) {
    conceito = "B"
  } else if (media >= 6) {
    conceito = "C"
  } else {
    conceito = "D"
  }
  return conceito
}
```