import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetipoElectrodomesticosComponent } from './createtipo-electrodomesticos.component';

describe('CreatetipoElectrodomesticosComponent', () => {
  let component: CreatetipoElectrodomesticosComponent;
  let fixture: ComponentFixture<CreatetipoElectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetipoElectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetipoElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
