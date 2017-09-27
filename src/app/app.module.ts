import { CharacterService } from './character.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { MesssageComponent } from './messsage/messsage.component';
import { DataService } from './data.service';
import { Md5 } from "ts-md5/dist/md5";
import { ComicComponent } from './comic/comic.component';
import { MessageEditComponent } from 'app/messsage/message-edit/message-edit.component';
import { MessageStartComponent } from './messsage/message-start/message-start.component';
import { ComicEditComponent } from './comic/comic-edit/comic-edit.component';
import { ComicStartComponent } from './comic/comic-start/comic-start.component';
import { AuthGuard } from 'app/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MesssageComponent,
    ComicComponent,
    MessageEditComponent,
    MessageStartComponent,
    ComicEditComponent,
    ComicStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    DataService,
    Md5,
    CharacterService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
