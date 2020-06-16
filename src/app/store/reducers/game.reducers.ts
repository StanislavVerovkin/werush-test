import {GAMES_ACTION, GameActions} from '../actions/game.actions';
import {DataModel} from '../../models/data.model';

const initialState = {
  games: [],
  filteredGames: [],
  isLoading: false,
};

export function gameReducers(state = initialState, action: GameActions) {
  switch (action.type) {
    case GAMES_ACTION.START_LOAD_GAMES:
      return {
        ...state,
        isLoading: true,
      };
    case GAMES_ACTION.SUCCESS_LOAD_GAMES:
      return {
        ...state,
        games: action.payload,
        filteredGames: action.payload,
        isLoading: false,
      };
    case GAMES_ACTION.FILTER_GAMES:
      return {
        ...state,
        filteredGames: action.payload ?
          state.games.filter((game: DataModel) => game.title.toLowerCase()
            .includes(action.payload.toLowerCase())) : state.games
      };
  }
}
