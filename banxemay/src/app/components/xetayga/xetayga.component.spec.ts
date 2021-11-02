import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XetaygaComponent } from './xetayga.component';

describe('XetaygaComponent', () => {
  let component: XetaygaComponent;
  let fixture: ComponentFixture<XetaygaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XetaygaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XetaygaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
