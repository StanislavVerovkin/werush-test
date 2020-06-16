import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DataModel} from '../../models/data.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {

  $data: Observable<{ filteredGames: DataModel[] }>;

  constructor(
    private store: Store<AppState>
  ) {
    this.$data = store.pipe(select('data'));
  }

  trackByFn(el: { title: string }) {
    return el.title
  }

}
