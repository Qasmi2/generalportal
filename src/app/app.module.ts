import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { DateService } from './services/date.service';
import { QuestionaskComponent } from './components/questionask/questionask.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { AboutComponent } from './conponents/about/about.component';

const appRoutes: Routes = [
  { path: '', component: QuestionlistComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionlistComponent,
    QuestionaskComponent,
    AddquestionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
