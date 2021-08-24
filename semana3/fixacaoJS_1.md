```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 const bonusSobNumeroCarros = qtdeCarrosVendidos * 100
 const bonusSobValorDosCarros = valorTotalVendas * 0.05
 return salarioFixo + bonusSobValorDosCarros + bonusSobNumeroCarros
  
}
```