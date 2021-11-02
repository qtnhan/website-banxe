import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemayComponent } from './xemay.component';

describe('XemayComponent', () => {
  let component: XemayComponent;
  let fixture: ComponentFixture<XemayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
