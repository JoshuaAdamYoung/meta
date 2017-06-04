/**
MODULES
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
COMPONENTS
*/

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/**
PROVIDERS
*/

import { AF } from './providers/af';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';

/**
VARIABLES
*/

export const firebaseConfig = {
    apiKey: "AIzaSyCS2N3L7VYdwZ0nFtyHRmYIX40f-n6-f-k",
    authDomain: "meta-ae159.firebaseapp.com",
    databaseURL: "https://meta-ae159.firebaseio.com",
    projectId: "meta-ae159",
    storageBucket: "meta-ae159.appspot.com",
    messagingSenderId: "728957593781"
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent},
  { path: 'profile', component: ProfileComponent}
];

/**
NgModule
*/

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    LoginComponent,
    TodoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MaterialModule
  ],
  providers: [ AF ],
  bootstrap: [AppComponent]
})
export class AppModule { }
