import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FlexLayoutModule} from "@angular/flex-layout";
import {LobbyRoutes} from "./lobby.routes";
import {LobbyComponent} from "./lobby.component";
import {MaterialModule} from "../material.module";
import { RoomListComponent } from './room-list/room-list.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(LobbyRoutes)
  ],
  declarations: [
    LobbyComponent,
    RoomListComponent
  ]
})
export class LobbyModule {
}