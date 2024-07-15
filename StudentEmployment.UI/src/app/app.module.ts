import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';

import { VacanciesComponent } from './vacancies/vacancies.component';
import { CreateVacancyComponent } from './employer/create-vacancy/create-vacancy.component';
import { EditVacancyComponent } from './employer/edit-vacancy/edit-vacancy.component';
import { MyVacanciesComponent } from './employer/my-vacancy/my-vacancies.component';
import { OpenVacancyComponent } from './vacancies/open-vacancy/open-vacancy.component';
import { SearchPipe } from './search.pipe';

import { AdminComponent } from './admin/admin.component';
import { AddVacancyComponent } from './admin/add-vacancy/add-vacancy.component';
import { RequestComponent } from './admin/request/request.component';
import { ChangeVacancyComponent } from './admin/change-vacancy/change-vacancy.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { EmployerComponent } from './employer/employer.component';
import { AddEmployerComponent } from './admin/add-employer/add-employer.component';
import { CheckVacancyComponent } from './admin/check-vacancy/check-vacancy.component';
import { ChangeEmployerComponent } from './admin/change-employer/change-employer.component';


// import { Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: 'vacanciescreate', component: AddVacancyComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VacanciesComponent,

    AdminComponent,
    AddVacancyComponent,
    AddEmployerComponent,
    EmployersComponent,
    ChangeEmployerComponent,
    ChangeVacancyComponent,
    RequestComponent,
    CheckVacancyComponent,

    EmployerComponent,
    CreateVacancyComponent,
    EditVacancyComponent,
    MyVacanciesComponent,

    OpenVacancyComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }