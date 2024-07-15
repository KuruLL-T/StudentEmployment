import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vacancy } from '../models/vacancy';
import { Employer } from '../models/employer';
import { CategoryType } from '../models/categorytype';
import { Schedule } from '../models/shedule';
import { Region } from '../models/region';
import { City } from '../models/city';

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient) { }

    readonly SEAPIUrl = 'https://localhost:7260/api';

    getVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(this.SEAPIUrl + `/Vacancies`);
    }
    searchVacancy(data: any): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(this.SEAPIUrl + `/Vacancies/SearchVacancy`, data);
    }
    addVacancy(vacancy: Vacancy): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(this.SEAPIUrl + `/Vacancies`, vacancy);
    }
    changeVacancy(vacancy: Vacancy): Observable<Vacancy[]> {
        return this.http.put<Vacancy[]>(this.SEAPIUrl + `/Vacancies/ChangeVacancy`, vacancy);
    }
    deleteVacancy(vacancy: Vacancy): Observable<Vacancy[]> {
        return this.http.delete<Vacancy[]>(this.SEAPIUrl + `/Vacancies/${vacancy.vacancyId}`);
    }
    deleteEmployer(employer: Employer): Observable<Employer[]> {
        return this.http.delete<Employer[]>(this.SEAPIUrl + `/Employer/${employer.employerId}`);
    }
    changeEmployer(employer: Employer): Observable<Employer[]> {
        return this.http.put<Employer[]>(this.SEAPIUrl + `/Employer`, employer);
    }
    getEmployers(): Observable<Employer[]> {
        return this.http.get<Employer[]>(this.SEAPIUrl + `/Employer`);
    }
    getCategories(): Observable<CategoryType[]> {
        return this.http.get<CategoryType[]>(this.SEAPIUrl + `/CategoryType`);
    }
    getSchedules(): Observable<Schedule[]> {
        return this.http.get<Schedule[]>(this.SEAPIUrl + `/Schedule`);
    }
    getRegions(): Observable<Region[]> {
        return this.http.get<Region[]>(this.SEAPIUrl + `/Region`);
    }
    getCities(): Observable<City[]> {
        return this.http.get<City[]>(this.SEAPIUrl + `/City`);
    }
    getCity(data: any): Observable<City[]> {
        return this.http.post<City[]>(this.SEAPIUrl + `/City/GetCity`, data);
    }


    addEmployer(employer: Employer): Observable<Employer[]> {
        return this.http.post<Employer[]>(this.SEAPIUrl + `/Employer`, employer);
    }
}