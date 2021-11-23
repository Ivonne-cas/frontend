import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFabricanteComponent } from './show-fabricante.component';

describe('ShowFabricanteComponent', () => {
  let component: ShowFabricanteComponent;
  let fixture: ComponentFixture<ShowFabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFabricanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
