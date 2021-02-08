import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AppCountryDataService,
  touristSpots,
} from '../services/app-country-data.service';

@Component({
  selector: 'app-country-specific-list',
  templateUrl: './country-specific-list.component.html',
  styleUrls: ['./country-specific-list.component.css'],
})
export class CountrySpecificListComponent implements OnInit {
  allToursistSpots: Array<touristSpots>;
  choosenCountry: string;
  count = 0;

  constructor(
    private dataCountryService: AppCountryDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('route-name: ', params['name']);
      if (params['name'] == 'USA') {
        this.choosenCountry = 'USA';
        this.dataCountryService
          .getAmericaTouristSpots()
          .subscribe((touristSpots) => {
            this.allToursistSpots = touristSpots;
          });
      } else if (params['name'] == 'India') {
        this.choosenCountry = 'India';
        this.dataCountryService
          .getIndiaTouristSpots()
          .subscribe((touristSpots) => {
            this.allToursistSpots = touristSpots;
          });
      } else if (params['name'] == 'Switzerland') {
        this.choosenCountry = 'Switzerland';
        this.dataCountryService
          .getSwitzerlandTouristSpots()
          .subscribe((touristSpots) => {
            this.allToursistSpots = touristSpots;
          });
      } else {
        this.allToursistSpots = Array<touristSpots>();
      }
    });
  }

  // updateTouristsList() {
  //   this.touristSpots = this.allToursistSpots;
  // }
}
