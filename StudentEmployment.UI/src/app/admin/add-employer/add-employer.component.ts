import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employer } from 'src/app/models/employer';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
    selector: 'app-add-employer',
    templateUrl: './add-employer.component.html',
    styleUrls: ['./add-employer.component.css']
})

export class AddEmployerComponent implements OnInit {
    employers: Employer[] = [];

    constructor(private adminService: AdminService) { }

    @Input() employer: Employer;
    employerId: number;
    companyName = "";
    address = "";
    contactName = "";
    phoneNumber = "";
    email = "";

    ngOnInit(): void {
        this.adminService.getEmployers().subscribe((employer) => {
            this.employers = employer;
        });
    }

    @Output() employersUpdated = new EventEmitter<Employer[]>();

    addEmployer() {
        let employer = {
            employerId: this.employerId,
            companyName: this.companyName,
            address: this.address,
            contactName: this.contactName,
            phoneNumber: this.phoneNumber,
            email: this.email,
        };
        this.adminService
            .addEmployer(employer)
            .subscribe((employers: Employer[]) => this.employersUpdated.emit(employers));
    }
}