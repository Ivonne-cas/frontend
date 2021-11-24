import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaparatoComponent } from './showaparato.component';

describe('ShowaparatoComponent', () => {
  let component: ShowaparatoComponent;
  let fixture: ComponentFixture<ShowaparatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowaparatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaparatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
