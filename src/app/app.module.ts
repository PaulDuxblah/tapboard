import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TapComponent } from './tap/tap.component';
import { ScoresComponent } from './scores/scores.component';

import { UserService } from './services/user.service';
import { ScoreService } from './services/score.service';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'tap', component: TapComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    TapComponent,
    RegisterComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [ UserService, ScoreService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
