import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySpecificListComponent } from './country-specific-list.component';

describe('CountrySpecificListComponent', () => {
  let component: CountrySpecificListComponent;
  let fixture: ComponentFixture<CountrySpecificListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySpecificListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySpecificListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
