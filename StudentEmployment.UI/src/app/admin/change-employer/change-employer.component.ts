import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employer } from 'src/app/models/employer';
import { AdminService } from 'src/app/admin/admin.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-change-employer',
    templateUrl: './change-employer.component.html',
    styleUrls: ['./change-employer.component.css']
})

export class ChangeEmployerComponent implements OnInit {
    employers: Employer[] = [];

    EmployerList$!: Observable<any[]>;

    constructor(private adminService: AdminService) { }

    @Input() employer?: Employer;

    ngOnInit(): void {
        this.EmployerList$ = this.adminService.getEmployers();
    }

    @Output() employersUpdated = new EventEmitter<Employer[]>();

    changeEmployer(employer: Employer) {
        this.adminService
            .changeEmployer(employer)
            .subscribe((employers: Employer[]) => this.employersUpdated.emit(employers));
    }

    deleteEmployer(employer: Employer) {
        this.adminService
            .deleteEmployer(employer)
            .subscribe((employers: Employer[]) => this.employersUpdated.emit(employers));
    }
}