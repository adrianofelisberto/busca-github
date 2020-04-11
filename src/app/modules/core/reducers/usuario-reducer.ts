import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { ActionModel } from '../models/action.model';
import { ActionTypes } from '../enuns/action-types.enum';

export function usuarioReducer(state: UsuarioGitHub, action: ActionModel) {
  switch (action.type) {
    case ActionTypes.ADICIONAR:
      {
        state = action.payload;
        return state;
      }
    case ActionTypes.LIMPAR:
      {
        return null;
      }
  }
}
