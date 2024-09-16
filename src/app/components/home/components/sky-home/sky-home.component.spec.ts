import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyHomeComponent } from './sky-home.component';

describe('SkyHomeComponent', () => {
  let component: SkyHomeComponent;
  let fixture: ComponentFixture<SkyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
