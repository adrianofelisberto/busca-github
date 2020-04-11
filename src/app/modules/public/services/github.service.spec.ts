import { TestBed, inject, async } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientModule, HttpBackend, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioGitHub } from '../models/usuario-github.model';
import { environment } from 'src/environments/environment';

const usuario: any = {
  login: 'adrianofelisberto',
  id: 49987226,
  node_id: 'MDQ6VXNlcjQ5OTg3MjI2',
  avatar_url: 'https://avatars3.githubusercontent.com/u/49987226?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/adrianofelisberto',
  html_url: 'https://github.com/adrianofelisberto',
  followers_url: 'https://api.github.com/users/adrianofelisberto/followers',
  following_url: 'https://api.github.com/users/adrianofelisberto/following{/other_user}',
  gists_url: 'https://api.github.com/users/adrianofelisberto/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/adrianofelisberto/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/adrianofelisberto/subscriptions',
  organizations_url: 'https://api.github.com/users/adrianofelisberto/orgs',
  repos_url: 'https://api.github.com/users/adrianofelisberto/repos',
  events_url: 'https://api.github.com/users/adrianofelisberto/events{/privacy}',
  received_events_url: 'https://api.github.com/users/adrianofelisberto/received_events',
  type: 'User',
  site_admin: false,
  name: 'Adriano Araújo Felisberto',
  company: 'CTIS',
  blog: 'https://www.linkedin.com/in/adriano-araujo-7a2a5311b/',
  location: 'Campina Grande',
  email: null,
  hireable: null,
  bio: 'I am a full stack developer, I have experience in AngularJS, Angular, React, JavaEE, JPA, Spring, Laravel, Wordpress, Keycloak.',
  public_repos: 7,
  public_gists: 0,
  followers: 0,
  following: 3,
  created_at: '2019-04-25T13:44:01Z',
  updated_at: '2020-04-11T14:16:40Z'
}

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
    request.flush(usuario);
  })));

});
