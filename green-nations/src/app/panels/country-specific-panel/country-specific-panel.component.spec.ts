import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySpecificPanelComponent } from './country-specific-panel.component';

describe('CountrySpecificPanelComponent', () => {
  let component: CountrySpecificPanelComponent;
  let fixture: ComponentFixture<CountrySpecificPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySpecificPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySpecificPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
