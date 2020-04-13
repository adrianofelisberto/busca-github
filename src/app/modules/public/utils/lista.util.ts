import { Repositorio } from '../models/repositorio.model';

export class ListaUtil {
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
