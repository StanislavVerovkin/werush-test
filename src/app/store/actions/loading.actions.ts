import {Action} from '@ngrx/store';

export namespace LOADING_ACTION {
  export const START_LOADING = 'START_LOADING';
}

export class StartLoading implements Action {

  readonly type = LOADING_ACTION.START_LOADING;

}

export type LoadingActions = StartLoading;
