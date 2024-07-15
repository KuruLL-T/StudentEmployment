import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { AdminService } from 'src/app/admin/admin.service';

import { Employer } from 'src/app/models/employer';
import { CategoryType } from 'src/app/models/categorytype';
import { Schedule } from 'src/app/models/shedule';
import { Region } from 'src/app/models/region';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css']
})

export class AddVacancyComponent implements OnInit {
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
  selected: number;
  asd = {
    regionId: 0
  }

  constructor(private adminService: AdminService) { }

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

  ngOnInit(): void {
    this.adminService.getEmployers().subscribe((employer) => {
      this.employers = employer;
    });
    this.adminService.getCategories().subscribe((categoryType) => {
      this.categoryTypes = categoryType;
    });
    this.adminService.getSchedules().subscribe((schedule) => {
      this.schedules = schedule;
    });
    this.adminService.getRegions().subscribe((region) => {
      this.regions = region;
    });
    this.adminService.getCities().subscribe((city) => {
      this.cities = city;
    });
  }

  @Output() vacanciesUpdated = new EventEmitter<Vacancy[]>();

  addVacancy() {
    let vacancy = {
      vacancyId: this.vacancyId,
      employerId: this.employerId,
      jobTitle: this.jobTitle,
      categoryTypeId: this.categoryTypeId,
      regionId: this.selected,
      cityId: this.cityId,
      scheduleId: this.scheduleId,
      experience: this.experience,
      salary: this.salary,
      otherRequirements: this.otherRequirements,
      contactName: this.contactName,
      lastUpdate: new Date,
      vacancyStatus: true,
    };
    this.adminService
      .addVacancy(vacancy)
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