import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFieldComponent } from './invalid-field.component';

describe('InvalidFieldComponent', () => {
  let component: InvalidFieldComponent;
  let fixture: ComponentFixture<InvalidFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
