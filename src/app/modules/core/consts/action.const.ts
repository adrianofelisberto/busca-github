import { Action } from '@ngrx/store';

import { ActionTypes } from '../enuns/action-types.enum';

export const Adicionar = (objeto: any) => {
  return {
    type: ActionTypes.ADICIONAR,
    payload: objeto
  } as Action;
};

export const Limpar = () => {
  return {
    type: ActionTypes.LIMPAR,
    payload: null
  } as Action;
};
