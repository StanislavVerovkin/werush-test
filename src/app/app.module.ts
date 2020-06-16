import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchPanelComponent} from './components/search-panel/search-panel.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoaderComponent} from './components/loader/loader.component';

import {environment} from '../environments/environment';

import {gameReducers} from './store/reducers/game.reducers';
import {loadingReducers} from './store/reducers/loading.reducers';

const reducers = {
  data: gameReducers,
  loading: loadingReducers,
};

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    ContentComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionSerializability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
