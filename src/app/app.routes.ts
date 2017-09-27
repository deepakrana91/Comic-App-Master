import { AuthGuard } from 'app/auth/auth-guard.service';
import { ComicStartComponent } from './comic/comic-start/comic-start.component';
import { ComicEditComponent } from './comic/comic-edit/comic-edit.component';
import { MessageStartComponent } from './messsage/message-start/message-start.component';


import { MessageEditComponent } from 'app/messsage/message-edit/message-edit.component';
import { ComicComponent } from './comic/comic.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MesssageComponent } from './messsage/messsage.component';

export const ROUTES: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  { path: 'message', component:MesssageComponent,canActivateChild:[AuthGuard],children:[
    {path:'', component:MessageStartComponent},
    {path:':id',component:MessageEditComponent}
  ]},
  { path: 'home', component: HomeComponent},
  { path: 'callback', component: CallbackComponent },
  {path: 'comic',component:ComicComponent,canActivateChild:[AuthGuard],children:[
    {path:'', component:ComicStartComponent},
    {path:':id',component:ComicEditComponent}
  ]},
  { path: '**', redirectTo: '/' },
  
];
