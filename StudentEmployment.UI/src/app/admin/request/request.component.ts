import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input()
  vacancy: Vacancy;
  vacancies: Vacancy[] = [];

  vacancyToEdit: Vacancy;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getVacancies().subscribe((vacancy) => {
      this.vacancies = vacancy;
    });
  }

  editVacancy(vacancy: Vacancy) {
    this.vacancyToEdit = vacancy;
  }
  changeVacancyList(vacancies: Vacancy[]) {
    this.vacancies = vacancies;
  }

  vacancyToOpen: Vacancy;
  openVacancy(vacancy: Vacancy) {
    this.vacancyToOpen = vacancy;
  }
}