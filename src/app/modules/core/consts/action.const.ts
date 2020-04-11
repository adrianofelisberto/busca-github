import { Action } from '@ngrx/store';

import { ActionTypes } from '../enuns/action-types.enum';

const ADICIONAR = (objeto: any) => {
  return {
    type: ActionTypes.ADICIONAR,
    payload: objeto
  } as Action;
};

const LIMPAR = () => {
  return {
    type: ActionTypes.LIMPAR,
    payload: null
  } as Action;
};

export const ACTION = {
  ADICIONAR,
  LIMPAR
};
