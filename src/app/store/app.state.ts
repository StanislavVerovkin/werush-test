import {DataModel} from '../models/data.model';

export interface AppState {
  data: {
    games: DataModel[];
    filteredGames: DataModel[];
    isLoading: boolean;
  };
}
