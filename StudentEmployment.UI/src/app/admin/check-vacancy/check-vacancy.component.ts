import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { AdminService } from 'src/app/admin/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-vacancy',
  templateUrl: './check-vacancy.component.html',
  styleUrls: ['./check-vacancy.component.css']
})

export class CheckVacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];
  VacancyList$!: Observable<any[]>;
  EmployerList$!: Observable<any[]>;
  CategoryTypeList$!: Observable<any[]>;
  ScheduleList$!: Observable<any[]>;
  RegionList$!: Observable<any[]>;
  CityList$!: Observable<any[]>;

  vacancyToEdit: Vacancy;

  constructor(private adminService: AdminService) { }

  @Input() vacancy?: Vacancy;

  ngOnInit(): void {
    this.VacancyList$ = this.adminService.getVacancies();
    this.EmployerList$ = this.adminService.getEmployers();
    this.CategoryTypeList$ = this.adminService.getCategories();
    this.ScheduleList$ = this.adminService.getSchedules();
    this.RegionList$ = this.adminService.getRegions();
    this.CityList$ = this.adminService.getCities();
  }

  @Output() vacanciesUpdated = new EventEmitter<Vacancy[]>();

  deleteVacancy(vacancy: Vacancy) {
    this.adminService
      .deleteVacancy(vacancy)
      .subscribe((vacancies: Vacancy[]) => this.vacanciesUpdated.emit(vacancies));
  }
}