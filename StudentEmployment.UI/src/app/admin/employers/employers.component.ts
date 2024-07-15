import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
    selector: 'app-employers',
    templateUrl: './employers.component.html',
    styleUrls: ['./employers.component.css']
})

export class EmployersComponent implements OnInit {

    @Input()
    employer: Employer;
    employers: Employer[] = [];

    employerToEdit: Employer;

    constructor(private adminService: AdminService) { }

    ngOnInit(): void {
        this.adminService.getEmployers().subscribe((employer) => {
            this.employers = employer;
        });
    }

    editEmployer(employer: Employer) {
        this.employerToEdit = employer;
    }
    changeEmployerList(employers: any[]) {
        this.employers = employers;
    }
}