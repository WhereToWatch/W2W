import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyHomeComponent } from './disney-home.component';

describe('DisneyHomeComponent', () => {
  let component: DisneyHomeComponent;
  let fixture: ComponentFixture<DisneyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
