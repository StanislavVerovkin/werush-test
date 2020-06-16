import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {FilterGames} from '../../store/actions/game.actions';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  filterGames(event) {
    this.store.dispatch(new FilterGames(event));
  }

}
