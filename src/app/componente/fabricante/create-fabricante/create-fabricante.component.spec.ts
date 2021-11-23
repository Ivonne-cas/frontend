import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabricanteComponent } from './create-fabricante.component';

describe('CreateFabricanteComponent', () => {
  let component: CreateFabricanteComponent;
  let fixture: ComponentFixture<CreateFabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFabricanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
