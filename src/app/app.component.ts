import {Component, OnInit} from '@angular/core';
import {DataModel} from './models/data.model';
import {DataService} from './services/data.service';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import {StartLoadGames, SuccessLoadGames} from './store/actions/game.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $data: Observable<{ loading: boolean }>;

  constructor(
    private dataService: DataService,
    private store: Store<AppState>,
  ) {
    this.$data = store.pipe(select('data'));
  }

  ngOnInit(): void {
    this.store.dispatch(new StartLoadGames());
    this.dataService.getDataFromFirebase()
      .subscribe(
        (res: DataModel[]) => {
          this.store.dispatch(new SuccessLoadGames(res));
        }
      );
  }
}
