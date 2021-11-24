import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcomponenteComponent } from './showcomponente.component';

describe('ShowcomponenteComponent', () => {
  let component: ShowcomponenteComponent;
  let fixture: ComponentFixture<ShowcomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
