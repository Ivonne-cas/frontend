import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomponenteComponent } from './createcomponente.component';

describe('CreatecomponenteComponent', () => {
  let component: CreatecomponenteComponent;
  let fixture: ComponentFixture<CreatecomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
