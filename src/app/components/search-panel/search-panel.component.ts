import {Component} from '@angular/core';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {FilterGames} from '../../store/actions/game.actions';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  constructor(
    private store: Store<AppState>
  ) {
  }

  filterGames(event) {
    this.store.dispatch(new FilterGames(event));
  }

}
