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

import { Adicionar } from '../consts/action.const';
import { usuarioReducer } from './usuario-reducer';
import { USUARIO } from '../../../shared/consts/usuario.mock';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { ActionModel } from '../models/action.model';

describe('usuario-reducer', () => {

  let usuarioMock: UsuarioGitHub;

  beforeEach(() => {
    usuarioMock = USUARIO;
  });


  it('deve iniciar um usuário', () => {
    const actionModel: ActionModel = Adicionar(usuarioMock) as ActionModel;
    const novoEstado: UsuarioGitHub = usuarioReducer(null, actionModel);
    expect(novoEstado).toEqual(usuarioMock);
  });

});
