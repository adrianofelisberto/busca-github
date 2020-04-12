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
