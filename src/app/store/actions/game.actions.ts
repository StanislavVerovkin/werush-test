import {Action} from '@ngrx/store';
import {DataModel} from '../../models/data.model';

export namespace GAMES_ACTION {
  export const START_LOAD_GAMES = 'START_LOAD_GAMES';
  export const SUCCESS_LOAD_GAMES = 'SUCCESS_LOAD_GAMES';
  export const FILTER_GAMES = 'FILTER_GAMES';
}

export class StartLoadGames implements Action {

  readonly type = GAMES_ACTION.START_LOAD_GAMES;

}

export class SuccessLoadGames implements Action {

  readonly type = GAMES_ACTION.SUCCESS_LOAD_GAMES;

  constructor(public payload: DataModel[]) {
  }

}

export class FilterGames implements Action {

  readonly type = GAMES_ACTION.FILTER_GAMES;

  constructor(public payload: any) {
  }

}

export type GameActions =
  StartLoadGames |
  SuccessLoadGames |
  FilterGames;

