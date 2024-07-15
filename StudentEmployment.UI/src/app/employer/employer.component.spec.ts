import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerComponent } from './employer.component';

describe('VacanciesComponent', () => {
  let component: EmployerComponent;
  let fixture: ComponentFixture<EmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});