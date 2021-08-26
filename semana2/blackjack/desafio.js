
if(confirm("Bem vinde ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {

   alert("Entrei no if dps q aceitei o jogo")
   // criando duas arrays para armazenar as cartas do usuario e do pc
   const cartasUsuario = []
   const cartasComputador = []
   
   alert("Criei as arrays")
   // criando um loop para inserir duas cartas em cada array, de forma aleatória
   for(let i = 0; i < 2; i++) {
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
   }
   
   alert("Coloquei valores na arrays")
   //criando um loop que verifica se as duas cartas sorteadas pro usuário sao iguais. Se sim,
   // é analisado se as cartas iguais sao ases. Se sim, as cartas do usuário sao sorteadas novamente
   // e armazenadas na array
   //for (let i = 0; cartasUsuario[0].valor !== cartasUsuario[1].valor; i++) {
   if((cartasUsuario[0].valor === 11) && (cartasUsuario[1].valor === 11)) {
      cartasUsuario = []
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
   }
   //}

   alert("Verifiquei se as cartas do usuario eram dos ases")
   //criando um loop que verifica se as duas cartas sorteadas pro PC sao iguais. Se sim,
   // é analisado se as cartas iguais sao ases. Se sim, as cartas do PC sao sorteadas novamente
   // e armazenadas na array
   //for (let i = 0; cartasComputador[0].valor !== cartasComputador[1].valor; i++) {
   if((cartasComputador[0].valor === 11) && (cartasComputador[1].valor === 11)) {
      cartasComputador = []
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())
   }
   //}

   alert("Verifiquei se as cartas do pc eram dois ases")
   //criando variáveis para armazenar a soma das cartas de cada jogador
   let somaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let somaPC = cartasComputador[0].valor + cartasComputador[1].valor

   alert("Armazenei as somas das cartas de cada um")
   // criando um loop para puxar cartas para o PC enquanto a soma das cartas nao der 21.
   for( let i = 2; somaPC < 21; i++) {
      cartasComputador.push(comprarCarta())
      somaPC = somaPC + cartasComputador[i].valor
   }

   alert("tirei mais cartas pro pc ate dar 21")

   let i = 2
   while((confirm(`Suas cartas são ${cartasUsuario.map(carta => carta.texto)}. A carta revelada do computador é ${cartasComputador[0].texto} \nDeseja comprar mais uma carta?`)) && (somaUsuario < 21)){   
      cartasUsuario.push(comprarCarta())
      somaUsuario = somaUsuario + cartasUsuario[i].valor
      i++
   }

   let mensagem = ''
   if((somaUsuario > somaPC) && (somaUsuario <= 21)) {
      mensagem = 'O usuário ganhou'
   } else if ((somaPC > somaUsuario) && (somaPC <= 21)) {
      mensagem = 'O pc ganhou'
   } else {
      mensagem = 'Empatou'
   }
   alert(`Suas cartas são ${cartasUsuario.map(carta => carta.texto)}. Sua pontuação é ${somaUsuario}. \nAs cartas do computador são ${cartasComputador.map(cartasComputador => cartasComputador.texto)}. A pontuação do computador é ${somaPC}. \n${mensagem}`)

   
} else {
   alert("O jogo acabou.")
}