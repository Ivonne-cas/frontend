import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaparatoComponent } from './createaparato.component';

describe('CreateaparatoComponent', () => {
  let component: CreateaparatoComponent;
  let fixture: ComponentFixture<CreateaparatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaparatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaparatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
