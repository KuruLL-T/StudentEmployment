import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { VacanciesComponent } from './vacancies/vacancies.component';

import { AdminComponent } from './admin/admin.component';
import { AddVacancyComponent } from './admin/add-vacancy/add-vacancy.component';
import { AddEmployerComponent } from './admin/add-employer/add-employer.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { RequestComponent } from './admin/request/request.component';

import { EmployerComponent } from './employer/employer.component';
import { MyVacanciesComponent } from './employer/my-vacancy/my-vacancies.component';
import { CreateVacancyComponent } from './employer/create-vacancy/create-vacancy.component';


const routes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Главная' }, },
  { path: 'vacancies', component: VacanciesComponent, data: { title: 'Вакансии' }, },
  { path: 'employer', component: EmployerComponent, data: { title: 'РАБОТОДАЛЬЕ' }, },
  { path: 'vacanciescreate', component: CreateVacancyComponent, data: { title: 'Создать вакансию' }, },
  { path: 'myvacancies', component: MyVacanciesComponent, data: { title: 'Мои вакансии' }, },
  { path: 'admin', component: AdminComponent, data: { title: 'Администрирование' }, },
  { path: 'addvacancy', component: AddVacancyComponent, data: { title: 'Добавить вакансию' }, },
  { path: 'addemployer', component: AddEmployerComponent, data: { title: 'Добавить работодателя' }, },
  { path: 'employers', component: EmployersComponent, data: { title: 'Работодатели' }, },
  { path: 'requestvacancy', component: RequestComponent, data: { title: 'Заявки на вакасию' }, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }