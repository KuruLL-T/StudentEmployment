import { Employer } from "./employer";
import { CategoryType } from "./categorytype";
import { Region } from "./region";
import { City } from "./city";
import { Schedule } from "./shedule";

export class Vacancy {
    vacancyId: number;
    employerId: number;
    employer?: Employer;
    jobTitle: string;
    categoryTypeId: number;
    categoryType?: CategoryType;
    regionId:number;
    region?: Region;
    cityId: number;
    city?: City;
    scheduleId: number;
    schedule?: Schedule;
    experience?: string;
    salary: string;
    otherRequirements?: string;
    contactName: string;
    lastUpdate: Date;
    vacancyStatus: boolean;
}