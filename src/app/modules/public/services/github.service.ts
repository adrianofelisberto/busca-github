/***************************************************************************************************
 * This program search an user from GitHub
 * Copyright (C) 2020 Adriano Araújo Felisberto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see [http://www.gnu.org/licenses/].
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsuarioGitHub } from '../../../shared/shared-models/models/usuario-github.model';
import { environment } from 'src/environments/environment';
import { Repositorio } from '../models/repositorio.model';

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

  /**
   * Busca uma lista de repositórios do usuário
   * @param username Usuário do GitHub
   * @returns Observable<Array<Repositorio>>
   */
  buscarRepositorios(username: string): Observable<Array<Repositorio>> {
    return this.http.get<Array<Repositorio>>(`${environment.apiUrl}/users/${username}/repos`)
      .pipe(
        map((resposta: any[]) => {
          const repositorios: Array<Repositorio> = resposta.map(repositorio => {
            const {
              description,
              html_url,
              name,
              stargazers_count,
              updated_at
            } = repositorio;

            return {
              description,
              html_url,
              name,
              stargazers_count,
              updated_at
            };
          });

          return repositorios;
        })
      );
  }

}
