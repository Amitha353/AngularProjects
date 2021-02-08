import { Component, Input, OnInit } from '@angular/core';
import { touristSpots } from 'src/app/services/app-country-data.service';
import { ScreenService } from 'src/fw/services/screen.service';

@Component({
  selector: 'app-country-specific-panel',
  templateUrl: './country-specific-panel.component.html',
  styleUrls: ['./country-specific-panel.component.css']
})
export class CountrySpecificPanelComponent implements OnInit {
  @Input() country: touristSpots;
  @Input() index = 1;
  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
}
