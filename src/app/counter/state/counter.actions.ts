import { createAction } from '@ngrx/store/src/action_creator';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
