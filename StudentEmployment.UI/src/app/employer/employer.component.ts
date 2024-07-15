import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../models/vacancy';
import { VacancyService } from './employer.service';
import { Employer } from '../models/employer';
import { CategoryType } from '../models/categorytype';
import { Region } from '../models/region';
import { City } from '../models/city';
import { Schedule } from '../models/shedule';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  vacancies: Vacancy[] = [];
  employer: Employer;
  employers: Employer[] = [];
  categoryType: CategoryType;
  categoryTypes: CategoryType[] = [];
  schedule: Schedule;
  schedules: Schedule[] = [];
  region: Region;
  regions: Region[] = [];
  city: City;
  cities: City[] = [];
  Cities: any[] = [];

  @Input() vacancy: Vacancy;
  vacancyId: number;
  employerId: number;
  jobTitle = '';
  categoryTypeId: number;
  regionId: number;
  cityId: number;
  scheduleId: number;
  experience?= '';
  salary = '';
  otherRequirements?= '';
  contactName = '';
  lastUpdate: Date;
  vacancyStatus: boolean;

  Array = [];
  filtertrue: boolean = true;
  filterfalse: boolean = false;

  selected: number;
  asd = {
    regionId: 0
  }

  vacanciesMap: Map<number, string> = new Map();

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe((vacancy) => {
      this.vacancies = vacancy;
    });
    this.vacancyService.getEmployers().subscribe((employer) => {
      this.employers = employer;
    });
    this.vacancyService.getCategories().subscribe((categoryType) => {
      this.categoryTypes = categoryType;
    });
    this.vacancyService.getSchedules().subscribe((schedule) => {
      this.schedules = schedule;
    });
    this.vacancyService.getRegions().subscribe((region) => {
      this.regions = region;
    });
    this.vacancyService.getCities().subscribe((city) => {
      this.cities = city;
    });

  }
  vacancyToOpen: Vacancy;
  openVacancy(vacancy: Vacancy) {
    this.vacancyToOpen = vacancy;
  }

  filterVacancy() {
    let a = {
      // jobTitle: this.jobTitle,
      categoryTypeId: this.categoryTypeId,
      regionId: this.selected,
      cityId: this.cityId,
      scheduleId: this.scheduleId,
      salary: this.salary,
    };
    this.vacancyService
      .searchVacancy(a)
      .subscribe((res: any) => {
        this.Array = res
        console.log(this.Array)
        this.filtertrue = false;
        this.filterfalse = true;
      })
  }

  clfilterVacancy() {
    this.vacancyService.getVacancies().subscribe((vacancy) => {
      this.vacancies = vacancy;
      this.filtertrue = true;
      this.filterfalse = false;
    });
  }
  searchText = '';

  click() {
    this.asd.regionId = this.selected
    this.vacancyService
      .getCity(this.asd)
      .subscribe((c: any) => {
        this.Cities = c
      })
  }

}