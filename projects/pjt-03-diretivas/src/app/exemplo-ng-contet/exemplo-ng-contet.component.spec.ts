import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContetComponent } from './exemplo-ng-contet.component';

describe('ExemploNgContetComponent', () => {
  let component: ExemploNgContetComponent;
  let fixture: ComponentFixture<ExemploNgContetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgContetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgContetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
