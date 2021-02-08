import { Component, Input, OnInit } from '@angular/core';
import { ScreenService } from 'src/fw/services/screen.service';

import { Country } from '../../view-models/Country';

@Component({
  selector: 'app-country-panel',
  templateUrl: './country-panel.component.html',
  styleUrls: ['./country-panel.component.css']
})
export class CountryPanelComponent implements OnInit {
  textScreen: boolean = true;
  @Input() country: Country;
  @Input() index = 1;

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
    this.textScreen = this.screenService.isLarge();
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
}
