import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyComponent } from './disney.component';

describe('DisneyComponent', () => {
  let component: DisneyComponent;
  let fixture: ComponentFixture<DisneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
