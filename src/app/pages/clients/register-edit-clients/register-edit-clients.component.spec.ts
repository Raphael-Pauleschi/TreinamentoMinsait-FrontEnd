import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEditClientsComponent } from './register-edit-clients.component';

describe('RegisterEditClientsComponent', () => {
  let component: RegisterEditClientsComponent;
  let fixture: ComponentFixture<RegisterEditClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEditClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEditClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
