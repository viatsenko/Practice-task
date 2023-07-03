import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { NetworksBikesComponent } from './content/networks-bikes/networks-bikes.component';
import { ErrorPageComponent } from './auth/error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzListModule} from "ng-zorro-antd/list";
import { StationsBikesComponent } from './content/stations-bikes/stations-bikes.component';
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderInfoComponent } from './header/header-info/header-info.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BikesEffects } from './store/effects/bikes.effects';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetworksBikesComponent,
    ErrorPageComponent,
    HeaderComponent,
    StationsBikesComponent,
    HeaderInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzWaveModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
    NzSpaceModule,
    NzIconModule,
    NzAvatarModule,
    NzListModule,
    NzPaginationModule,
    NgxPaginationModule,
    NzPageHeaderModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forFeature([BikesEffects]),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
