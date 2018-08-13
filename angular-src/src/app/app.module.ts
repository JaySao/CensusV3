import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MakeComponent } from './components/make/make.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PollComponent } from './components/poll/poll.component';
import { ResultsComponent } from './components/results/results.component';
import { SuccessComponent } from './components/success/success.component';

const appRoutes:Routes = [
  {path:'', component:DashboardComponent},
  {path:'make', component:MakeComponent},
  {path:'results/:id',component:ResultsComponent},
  {path:'poll/:id', component:PollComponent},
  {path:'success/:id', component:SuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MakeComponent,
    DashboardComponent,
    PollComponent,
    ResultsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
