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

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { USUARIO } from '../../../shared/consts/usuario.mock';
import { environment } from 'src/environments/environment';
import { GithubService } from './github.service';

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
