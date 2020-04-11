import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UsuarioGitHub } from '../../../shared/shared-models/models/usuario-github.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Busca um usuário pelo login
   * @param username Usuário do GitHub
   * @returns Observable<UsuarioGitHub>
   */
  buscarUsuario(username: string): Observable<UsuarioGitHub> {
    return this.http.get<UsuarioGitHub>(`${environment.apiUrl}/users/${username}`)
      .pipe(
        map((resposta: any) => {
          const {
            avatar_url,
            bio,
            email,
            followers,
            following,
            login,
            name
          } = resposta;

          return {
            avatar_url,
            bio,
            email,
            followers,
            following,
            login,
            name
          };
        })
      );
  }
}
