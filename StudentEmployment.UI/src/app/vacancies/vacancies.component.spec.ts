import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesComponent } from './vacancies.component';

describe('VacanciesComponent', () => {
  let component: VacanciesComponent;
  let fixture: ComponentFixture<VacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacanciesComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(VacanciesComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'StudentEmpoyment.UI'`, () => {
  //   const fixture = TestBed.createComponent(VacanciesComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('StudentEmpoyment.UI');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(VacanciesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('StudentEmpoyment.UI app is running!');
  // });
