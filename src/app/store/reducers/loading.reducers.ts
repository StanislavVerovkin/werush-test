import {LOADING_ACTION, LoadingActions} from '../actions/loading.actions';

const initialState = {
  loading: false
};

export function loadingReducers(state = initialState, action: LoadingActions) {
  switch (action.type) {
    case LOADING_ACTION.START_LOADING:
      return {
        ...state,
        loading: true
      };
  }
}

