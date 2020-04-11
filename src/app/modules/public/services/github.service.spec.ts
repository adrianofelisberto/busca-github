import { TestBed, inject, async } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientModule, HttpBackend, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { USUARIO } from './usuario.mock';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        GithubService
      ]
    });
    service = TestBed.inject(GithubService);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be filter value', async(inject([HttpTestingController], (backend: HttpTestingController) => {
    service.buscarUsuario('adrianofelisberto').subscribe();
    const request: any = backend.expectOne(`${environment.apiUrl}/users/adrianofelisberto`);
    expect(request.request.method).toBe('GET');
    request.flush(USUARIO);
  })));

});
