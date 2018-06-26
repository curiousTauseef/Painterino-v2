import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutes} from "./app.routes";
import {MainModule} from "./main/main.module";
import {SocketService} from "./services/socket.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {LobbyModule} from "./lobby/lobby.module";
import {NonAuthGuardService} from "./services/non-auth-guard.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MainModule,
    LobbyModule,
    RouterModule.forRoot(AppRoutes, {useHash: false, preloadingStrategy: PreloadAllModules})
  ],
  providers: [SocketService, AuthService, AuthGuardService, NonAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
