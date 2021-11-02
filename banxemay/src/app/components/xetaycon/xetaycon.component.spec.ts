import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XetayconComponent } from './xetaycon.component';

describe('XetayconComponent', () => {
  let component: XetayconComponent;
  let fixture: ComponentFixture<XetayconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XetayconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XetayconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
