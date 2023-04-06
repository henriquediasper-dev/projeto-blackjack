/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    

const carta1 = comprarCarta()  // Carta atribuída ao usuário
const carta2 = comprarCarta()  // Carta atribuída ao usuário
const carta3 = comprarCarta()  // Carta atribuída ao computador
const carta4 = comprarCarta()  // Carta atribuída ao computador

const pontosUsuario = carta1.valor + carta2.valor      //Soma das cartas do usuário
const pontosComputador = carta3.valor + carta4.valor   //Soma das cartas do computador



console.log("Boas vindas ao jogo BlackJack!")

if (confirm("Deseja iniciar uma nova partida de BlackJack?!")) {

   console.log("Resultado da rodada ↓")

   console.log(`Usuário: ${carta1.texto} ${carta2.texto} = ${pontosUsuario}`)
   console.log(`Computador: ${carta3.texto} ${carta4.texto} = ${pontosComputador}`)

if(pontosUsuario > 21){
   console.log("O computador ganhou!")
} else if (pontosUsuario > pontosComputador && pontosUsuario <= 21){
   console.log("O usuário ganhou!")
}else if (pontosComputador > 21) {
   console.log("O usuário ganhou!")
}else if (pontosUsuario < pontosComputador && pontosComputador <= 21){
   console.log("O computador ganhou!")
}else if (pontosUsuario = pontosComputador){
   console.log("Deu empate!")
}
}else{
   console.log ("Que pena que não quer jogar!")
}
















//-------------------------------------------------------------------------------------------------------------------

//    if (usuario > computador) {                  //Condicição para que se o usuário ganhar 
//       console.log("O usuário ganhou!")
//    } else if (usuario < computador) {           //Condição para que se o computador ganhar
//       console.log("O computador ganhou!")

//    } else if (usuario = computador) {           //Condição caso dê empate
//       console.log("Deu empate!")
//    }

 
// } else {                                          //Condição caso o usuário opte por cancelar o pedido de jogar uma partida
//    console.log("Que pena que não quer jogar!")     
// }

