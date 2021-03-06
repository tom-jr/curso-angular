import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponent } from './meu-segundo.component';

describe('MeuSegundoComponentComponent', () => {
  let component: MeuSegundoComponent;
  let fixture: ComponentFixture<MeuSegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuSegundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
