import {Component, OnInit} from '@angular/core';
import {DataModel} from './models/data.model';
import {DataService} from './services/data.service';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import {SuccessLoadGames} from './store/actions/game.actions';
import {StartLoading} from './store/actions/loading.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $loading: Observable<boolean>;

  constructor(
    private dataService: DataService,
    private store: Store<AppState>,
  ) {
    this.$loading = store.pipe(select('loading'));
  }

  ngOnInit(): void {
    this.store.dispatch(new StartLoading());
    this.dataService.getDataFromFirebase()
      .subscribe(
        (res: DataModel[]) => {
          this.store.dispatch(new SuccessLoadGames(res));
        }
      );
  }
}
