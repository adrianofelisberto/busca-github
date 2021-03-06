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

/*
 * Arquivo de mock para ser usado nos testes unitários
 */

import { UsuarioGitHub } from '../shared-models/models/usuario-github.model';

export const USUARIO_GITHUB: UsuarioGitHub = {
  avatar_url: 'teste',
  bio: 'teste',
  email: 'teste',
  followers: 0,
  following: 0,
  login: 'teste',
  name: 'teste',
};

export const USUARIO: any = {
  login: 'usuarioMockado',
  id: 64098633,
  node_id: '2HyhwAUd1YAbF7iW76pi',
  avatar_url: 'https://avatars3.githubusercontent.com/u/64098633?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/usuarioMockado',
  html_url: 'https://github.com/usuarioMockado',
  followers_url: 'https://api.github.com/users/usuarioMockado/followers',
  following_url: 'https://api.github.com/users/usuarioMockado/following{/other_user}',
  gists_url: 'https://api.github.com/users/usuarioMockado/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/usuarioMockado/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/usuarioMockado/subscriptions',
  organizations_url: 'https://api.github.com/users/usuarioMockado/orgs',
  repos_url: 'https://api.github.com/users/usuarioMockado/repos',
  events_url: 'https://api.github.com/users/usuarioMockado/events{/privacy}',
  received_events_url: 'https://api.github.com/users/usuarioMockado/received_events',
  type: 'User',
  site_admin: false,
  name: 'Puizi Boioncol Neon',
  company: 'BR',
  blog: 'https://www.linkedin.com/in/puizi-neon-fOX4te6U/',
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
};

export const REPOSITORIO: any = {
    id: 6409863300,
    node_id: 'mWSRTYkP122Xqnljh7NlzsKFHpGloKC=',
    name: 'repositorio_mockado',
    full_name: 'usuario_mockado/repositorio_mockado',
    private: false,
    owner: {
      login: 'usuario_mockado',
      id: 64098633,
      node_id: 'MDQ6VXNlcjQ5OTg3MjI2',
      avatar_url: 'https://avatars3.githubusercontent.com/u/64098633?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/usuario_mockado',
      html_url: 'https://github.com/usuario_mockado',
      followers_url: 'https://api.github.com/users/usuario_mockado/followers',
      following_url: 'https://api.github.com/users/usuario_mockado/following{/other_user}',
      gists_url: 'https://api.github.com/users/usuario_mockado/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/usuario_mockado/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/usuario_mockado/subscriptions',
      organizations_url: 'https://api.github.com/users/usuario_mockado/orgs',
      repos_url: 'https://api.github.com/users/usuario_mockado/repos',
      events_url: 'https://api.github.com/users/usuario_mockado/events{/privacy}',
      received_events_url: 'https://api.github.com/users/usuario_mockado/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/usuario_mockado/repositorio_mockado',
    description: 'Trabalho de Conclusão de Curso.',
    fork: false,
    url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado',
    forks_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/forks',
    keys_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/teams',
    hooks_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/hooks',
    issue_events_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/issues/events{/number}',
    events_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/events',
    assignees_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/assignees{/user}',
    branches_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/branches{/branch}',
    tags_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/tags',
    blobs_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/languages',
    stargazers_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/stargazers',
    contributors_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/contributors',
    subscribers_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/subscribers',
    subscription_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/subscription',
    commits_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/contents/{+path}',
    compare_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/merges',
    archive_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/downloads',
    issues_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/issues{/number}',
    pulls_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/labels{/name}',
    releases_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/releases{/id}',
    deployments_url: 'https://api.github.com/repos/usuario_mockado/repositorio_mockado/deployments',
    created_at: '2019-11-23T23:56:21Z',
    updated_at: '2019-11-23T23:56:21Z',
    pushed_at: '2019-11-23T23:56:22Z',
    git_url: 'git://github.com/usuario_mockado/repositorio_mockado.git',
    ssh_url: 'git@github.com:usuario_mockado/repositorio_mockado.git',
    clone_url: 'https://github.com/usuario_mockado/repositorio_mockado.git',
    svn_url: 'https://github.com/usuario_mockado/repositorio_mockado',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
};
