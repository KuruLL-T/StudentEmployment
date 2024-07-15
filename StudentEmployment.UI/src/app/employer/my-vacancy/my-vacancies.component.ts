import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { VacancyService } from '../employer.service';

@Component({
  selector: 'app-my-vacancies',
  templateUrl: './my-vacancies.component.html',
  styleUrls: ['./my-vacancies.component.css']
})
export class MyVacanciesComponent implements OnInit {
  @Input()
  vacancy: Vacancy;
  vacancies: Vacancy[] = [];

  vacancyToEdit: Vacancy;

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe((vacancy) => {
      this.vacancies = vacancy;
    });
  }

  editVacancy(vacancy: Vacancy) {
    this.vacancyToEdit = vacancy;
  }
  updateVacancyList(vacancies: Vacancy[]) {
    this.vacancies = vacancies;
  }

  vacancyToOpen: Vacancy;
  openVacancy(vacancy: Vacancy) {
    this.vacancyToOpen = vacancy;
  }
}