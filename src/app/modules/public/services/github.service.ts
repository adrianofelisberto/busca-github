import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  buscarUsuario(username: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/${username}`);
  }
}
