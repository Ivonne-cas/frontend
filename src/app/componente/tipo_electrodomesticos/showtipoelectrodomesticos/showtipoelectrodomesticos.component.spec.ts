import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtipoelectrodomesticosComponent } from './showtipoelectrodomesticos.component';

describe('ShowtipoelectrodomesticosComponent', () => {
  let component: ShowtipoelectrodomesticosComponent;
  let fixture: ComponentFixture<ShowtipoelectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtipoelectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtipoelectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
