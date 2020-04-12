import { Adicionar } from '../consts/action.const';
import { usuarioReducer } from './usuario-reducer';
import { USUARIO } from '../../../shared/consts/usuario.mock';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { ActionModel } from '../models/action.model';
import { ActionTypes } from '../enuns/action-types.enum';

describe('usuario-reducer', () => {

  let usuarioMock: UsuarioGitHub;

  beforeEach(() => {
    usuarioMock = USUARIO;
  });


  it('deve iniciar um usuário', () => {
    const actionModel: ActionModel = Adicionar(usuarioMock);
    const novoEstado: UsuarioGitHub = usuarioReducer(null, actionModel);
    expect(novoEstado).toEqual(usuarioMock);
  });

});
