import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { AdminService } from 'src/app/admin/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-vacancy',
  templateUrl: './change-vacancy.component.html',
  styleUrls: ['./change-vacancy.component.css']
})

export class ChangeVacancyComponent implements OnInit {
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

  constructor(private adminService: AdminService) { }

  @Input() vacancy?: Vacancy;

  ngOnInit(): void {
    this.EmployerList$ = this.adminService.getEmployers();
    this.CategoryTypeList$ = this.adminService.getCategories();
    this.ScheduleList$ = this.adminService.getSchedules();
    this.RegionList$ = this.adminService.getRegions();
    this.CityList$ = this.adminService.getCities();
  }

  @Output() vacanciesUpdated = new EventEmitter<Vacancy[]>();

  changeVacancy(vacancy: Vacancy) {
    this.adminService
      .changeVacancy(vacancy)
      .subscribe((vacancies: Vacancy[]) => this.vacanciesUpdated.emit(vacancies));
  }

  deleteVacancy(vacancy: Vacancy) {
    this.adminService
      .deleteVacancy(vacancy)
      .subscribe((vacancies: Vacancy[]) => this.vacanciesUpdated.emit(vacancies));
  }

  click() {
    this.asd.regionId = this.selected
    this.adminService
      .getCity(this.asd)
      .subscribe((c: any) => {
        this.Cities = c
      })
  }
}