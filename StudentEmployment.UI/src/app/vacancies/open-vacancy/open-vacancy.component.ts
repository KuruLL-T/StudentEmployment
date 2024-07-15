import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/vacancies/vacancy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-open-vacancy',
  templateUrl: './open-vacancy.component.html',
  styleUrls: ['./open-vacancy.component.css']
})

export class OpenVacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];
  VacancyList$!: Observable<any[]>;
  EmployerList$!: Observable<any[]>;
  CategoryTypeList$!: Observable<any[]>;
  ScheduleList$!: Observable<any[]>;
  RegionList$!: Observable<any[]>;
  CityList$!: Observable<any[]>;

  constructor(private vacancyService: VacancyService) { }

  @Input() vacancy?: Vacancy;

  ngOnInit(): void {
    this.VacancyList$ = this.vacancyService.getVacancies();
    this.EmployerList$ = this.vacancyService.getEmployers();
    this.CategoryTypeList$ = this.vacancyService.getCategories();
    this.ScheduleList$ = this.vacancyService.getSchedules();
    this.RegionList$ = this.vacancyService.getRegions();
    this.CityList$ = this.vacancyService.getCities();
  }
}