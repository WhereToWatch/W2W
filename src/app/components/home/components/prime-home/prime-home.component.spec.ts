import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeHomeComponent } from './prime-home.component';

describe('PrimeHomeComponent', () => {
  let component: PrimeHomeComponent;
  let fixture: ComponentFixture<PrimeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
