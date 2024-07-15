import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/vacancies/vacancy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.css']
})

export class EditVacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];

  EmployerList$!: Observable<any[]>;
  CategoryTypeList$!: Observable<any[]>;
  ScheduleList$!: Observable<any[]>;
  RegionList$!: Observable<any[]>;
  CityList$!: Observable<any[]>;

  Cities: any[] = [];
  selected: number;
  asd = {
    regionId: 0
  }

  constructor(private vacancyService: VacancyService) { }

  @Input() vacancy?: Vacancy;

  ngOnInit(): void {
    this.EmployerList$ = this.vacancyService.getEmployers();
    this.CategoryTypeList$ = this.vacancyService.getCategories();
    this.ScheduleList$ = this.vacancyService.getSchedules();
    this.RegionList$ = this.vacancyService.getRegions();
    this.CityList$ = this.vacancyService.getCities();
  }

  @Output() vacanciesUpdated = new EventEmitter<Vacancy[]>();

  updateVacancy(vacancy: Vacancy) {
    this.vacancyService
      .updateVacancy(vacancy)
      .subscribe((vacancies: Vacancy[]) => this.vacanciesUpdated.emit(vacancies));
  }

  deleteVacancy(vacancy: Vacancy) {
    this.vacancyService
      .deleteVacancy(vacancy)
      .subscribe((vacancies: Vacancy[]) => this.vacanciesUpdated.emit(vacancies));
  }

  click() {
    this.asd.regionId = this.selected
    this.vacancyService
      .getCity(this.asd)
      .subscribe((c: any) => {
        this.Cities = c
      })
  }
}