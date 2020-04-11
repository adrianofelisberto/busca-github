import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Busca um usuário pelo login
   * @param username Usuário do GitHub
   * @returns Observable<any>
   */
  buscarUsuario(username: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/${username}`);
  }
}
