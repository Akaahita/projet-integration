import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '~environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { GlobalState } from '~store/states/global.state';
import { GlobalFacade } from '~store/facades/global.facade';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from '../../app-routing.module';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { StoreStorageModule } from './store-storage.module';

const DECLARATIONS: any[] = [];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  RouterModule,
  LoadingBarModule,
  LoadingBarHttpClientModule,
  NgxsModule.forRoot([GlobalState], {
    developmentMode: !environment.production
  }),
  NgxsActionsExecutingModule.forRoot(),
  NgxsFormPluginModule.forRoot(),
  StoreStorageModule,
  NgxsReduxDevtoolsPluginModule.forRoot()
];

const PROVIDERS = [GlobalFacade];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULES],
  providers: PROVIDERS,
  exports: [...DECLARATIONS, ...MODULES]
})
export class CoreModule {}
