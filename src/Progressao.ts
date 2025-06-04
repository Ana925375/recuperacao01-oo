export class Progressao {
  /**
   * Retorna um vetor com uma progressão aritmética crescente com *quantidade* elementos e razão *razao* entre seus elementos, onde sempre o primeiro elemento é o número 1.
   * @param quantidade Quantidade de elementos do vetor contendo a progressão.
   * @param razao A razão entre os elementos.
   * @returns
   */
  aritmetica(quantidade: number, razao: number) {
    let progAritimetica = [];
    let inicial = 1;
    for(let i = 0; i < quantidade; i ++){
      let resultado = inicial + i * razao;
      progAritimetica.push(resultado);
    }
    return progAritimetica;
  }

  /**
   * Retorna um vetor com uma progressão geométrica crescente com *quantidade* elementos e razão *razao* entre seus elementos, onde sempre o primeiro elemento é o número 1.
   * @param quantidade Quantidade de elementos do vetor contendo a progressão.
   * @param razao A razão entre os elementos.
   * @returns
   */
  geometrica(quantidade: number, razao: number) {
    let progGeometrica = [];
    let inicial = 1;
    for(let i = 0; i < quantidade; i ++){
      let resultado = inicial * (razao**i);
      progGeometrica.push(resultado);
    }
    return progGeometrica;
  }
}
