import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLangComponent } from './dictionary/modals/add-lang/add-lang.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { GameComponent } from './game/game.component';
import { GameDialogComponent } from './game/modals/game/game-dialog.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ClarityModule } from '@clr/angular';
import { UpdateLangComponent } from './dictionary/modals/update-lang/update-lang.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { UpdateTranslationComponent } from './dictionary-detail/modals/update-translation/update-translation.component';
import { AddTranslationComponent } from './dictionary-detail/modals/add-translation/add-translation.component';
import { RegisterComponent } from './register/register.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DictionaryEffects } from './store/dictionary/dictionary.effect';
import { DictionaryService } from './dictionary/dictionary.service';
import { LoaderInterceptorService } from './loader/loader-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers } from './store/dictionary';
import {reducers} from './store/index'
import { DictionaryDetailService } from './dictionary-detail/dictionary-detail.service';
// import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DictionaryComponent,
    GameComponent,
    GameDialogComponent,
    AlertsComponent,
    AddLangComponent,
    UpdateLangComponent,
    DictionaryDetailComponent,
    UpdateTranslationComponent,
    AddTranslationComponent,
    RegisterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
    ReactiveFormsModule,
    // TranslateModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DictionaryEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    DictionaryService,
    DictionaryDetailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
