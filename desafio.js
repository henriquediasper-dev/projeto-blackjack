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

// ----------------------------------------------------------------------------------------


let cartasJogadorUsuario = []
let cartasJogadorComputador = []
let cartasQueJaForamSorteadas = []

const mostrarCarta = (baralho) => {              //Função para identificar o texto das cartas, ou seja, naipe
   let arrayTextoCartas = []
   baralho.forEach(element => {
      arrayTextoCartas.push(element.texto)

   });
   return arrayTextoCartas
}


const pontosDoJogo = (baralho) => {              // Função para somar os pontos de cada jogador
   let somaDosPontos = 0
   baralho.forEach(element => {
      somaDosPontos = somaDosPontos + element.valor
   })
   return somaDosPontos
}


const carta1 = comprarCarta()  // Carta atribuída ao usuário
const carta2 = comprarCarta()  // Carta atribuída ao usuário
const carta3 = comprarCarta()  // Carta atribuída ao computador
const carta4 = comprarCarta()  // Carta atribuída ao computador
const carta5 = comprarCarta()  // Carta de troca do usuário caso ele pegue dois A na primeira mão
const carta6 = comprarCarta()  // Carta de troca do usuário caso ele pegue dois A na primeira mão
const carta7 = comprarCarta()  // Carta de troca do computador caso ele pegue dois A na primeira mão
const carta8 = comprarCarta()  // Carta de troca do computador caso ele pegue dois A na primeira mão


console.log("Boas vindas ao jogo BlackJack!")

const englobaJogo = () => {
   if (confirm("Deseja iniciar uma nova partida de BlackJack?!")) {            //Se o usuário confirmar o inicio de uma nova partida duas cartas para cada jogador serão disponibilizadas 
      cartasJogadorUsuario.push(carta1, carta2)
      cartasJogadorComputador.push(carta3, carta4)

      if (pontosDoJogo(cartasJogadorUsuario) === 22) {                         //Essa lógica serve para se por acaso sair dois Ás na primeira mão, será reembaralhado e disponibilizado novas cartas ao usuário
         cartasJogadorUsuario.splice(0, 2)
         cartasJogadorUsuario.push(carta5, carta6)
      }
      if (pontosDoJogo(cartasJogadorComputador) === 22) {                      //Essa lógica serve para se por acaso sair dois Ás na primeira mão, será reembaralhado e disponibilizado novas cartas ao jogador Computador
         cartasJogadorComputador.splice(0, 2)
         cartasJogadorComputador.push(carta7, carta8)
      }

      if (confirm(`As cartas do usuário são ${mostrarCarta(cartasJogadorUsuario)} e a carta revelada do computador é ${cartasJogadorComputador[0].texto} \n Deseja comprar mais uma carta?`)) {
         while (pontosDoJogo(cartasJogadorUsuario) < 21) {
            cartasJogadorUsuario.push(comprarCarta())
            if (pontosDoJogo(cartasJogadorUsuario) > 21) {
               alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O computador ganhou!`)
               return
            } else if (pontosDoJogo(cartasJogadorUsuario) === 21) {
               alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O usuário ganhou!`)
               return
            }
            if (!confirm(`As cartas do usuário são ${mostrarCarta(cartasJogadorUsuario)} e a carta revelada do computador é ${cartasJogadorComputador[0].texto} \n Deseja comprar mais uma carta?`)) {
               if (pontosDoJogo(cartasJogadorUsuario) < pontosDoJogo(cartasJogadorComputador)) {
                  alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O computador ganhou!`)
                  return
               } else if (pontosDoJogo(cartasJogadorUsuario) === pontosDoJogo(cartasJogadorComputador)) {
                  alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n Deu empate!`)
                  return
               }
               break
            }
         }
      } else if (pontosDoJogo(cartasJogadorUsuario) < pontosDoJogo(cartasJogadorComputador)) {
         alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O computador ganhou!`)
         return
      } else if (pontosDoJogo(cartasJogadorUsuario) === pontosDoJogo(cartasJogadorComputador)) {
         alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n Deu empate!`)
         return
      }
      while (pontosDoJogo(cartasJogadorComputador) < pontosDoJogo(cartasJogadorUsuario)) {
         cartasJogadorComputador.push(comprarCarta())
         if (pontosDoJogo(cartasJogadorComputador) === 21 || (pontosDoJogo(cartasJogadorComputador) > pontosDoJogo(cartasJogadorUsuario) && pontosDoJogo(cartasJogadorComputador) <= 21)) {
            alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O computador ganhou!`)
            return
         } else if (pontosDoJogo(cartasJogadorUsuario) > 21) {
            alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n O usuário ganhou!`)
            return
         } else if (pontosDoJogo(cartasJogadorComputador) === pontosDoJogo(cartasJogadorUsuario)) {
            alert(`O usuário cartas é ${mostrarCarta(cartasJogadorUsuario)} sua pontuação é ${pontosDoJogo(cartasJogadorUsuario)} \n as cartas do computador são ${mostrarCarta(cartasJogadorComputador)} e sua pontuação é ${pontosDoJogo(cartasJogadorComputador)} \n Deu empate!`)
            return
         }
      }
   } else {
      console.log("Que pena que não quer jogar!")
   }

}
englobaJogo()






