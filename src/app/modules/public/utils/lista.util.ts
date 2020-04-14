import { Repositorio } from '../models/repositorio.model';

export class ListaUtil {

  /**
   * Verifica qual o elemento com maior e menor número de estrelas, para ser ordenado em uma lista.
   * @param repositorioA repositório a ser comparado
   * @param repositorioB repositório a ser comparado
   */
  static ordenarListaPorEstrela(repositorioA: Repositorio, repositorioB: Repositorio) {
    if (repositorioB.stargazers_count < repositorioA.stargazers_count) {
      return -1;
    }

    if (repositorioB.stargazers_count > repositorioA.stargazers_count) {
      return 1;
    }

    return 0;
  }
}
