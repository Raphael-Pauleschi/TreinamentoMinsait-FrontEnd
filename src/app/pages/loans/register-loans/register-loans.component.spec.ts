import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoansComponent } from './register-loans.component';

describe('RegisterLoansComponent', () => {
  let component: RegisterLoansComponent;
  let fixture: ComponentFixture<RegisterLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
