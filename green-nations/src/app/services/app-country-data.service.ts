import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface touristSpots {
  id: number;
  name: string;
  epiIndex: number;
  src: string;
}

@Injectable()
export class AppCountryDataService {
  private tourist_america: Array<touristSpots> = [
    { id: 1, name: 'Grand Canyon', epiIndex: 87.67, src: '/assets/grand_canyon.jpg'},
    { id: 2, name: 'Yellowstone', epiIndex: 83.29, src: '/assets/yellowstone.jpg' },
    { id: 3, name: 'Golden Gate Bridge', epiIndex: 82.4 , src: '/assets/golden_gate_bridge.jpg'},
    { id: 4, name: 'Niagara Falls', epiIndex: 81.78, src: '/assets/niagara_falls.jpg' },
    { id: 5, name: 'Walt Disney World', epiIndex: 81.47, src: '/assets/walt_disney_world.jpg' },
    { id: 6, name: 'Yosemite National Park', epiIndex: 80.47, src: '/assets/yosemite_national_park.jpg' },
    { id: 7, name: 'Florida Keys', epiIndex: 79.09, src: '/assets/florida_keys.jpg' },
    { id: 8, name: 'Denali National Park', epiIndex: 78.32, src: '/assets/denali_national_park.jpg' },
    { id: 9, name: 'Las Vegas Strip', epiIndex: 78.09, src: '/assets/las_vegas_strip.jpg' },
    { id: 10, name: 'Manhattan', epiIndex: 78.04, src: '/assets/manhattan.jpg' },
  ];

  private tourist_india: Array<touristSpots> = [
    { id: 1, name: 'Taj Mahal', epiIndex: 87.67, src: '/assets/taj_mahal.jpg'},
    { id: 2, name: 'Varanasi', epiIndex: 83.29, src: '/assets/varanasi.jpg' },
    { id: 3, name: 'Jaisalmer', epiIndex: 82.4 , src: '/assets/jaisalmer.jpg'},
    { id: 4, name: 'Harmandir Sahib', epiIndex: 81.78, src: '/assets/harmandir_sahib.jpg' },
    { id: 5, name: 'Virupaksha Temple', epiIndex: 81.47, src: '/assets/virupaksha_temple.jpg' },
    { id: 6, name: 'Lake Palace', epiIndex: 80.47, src: '/assets/lake_palace.jpg' },
    { id: 7, name: 'Kerala backwaters', epiIndex: 79.09, src: '/assets/kerala_backwaters.jpg' },
    { id: 8, name: 'Meenakshi Amman Temple', epiIndex: 78.32, src: '/assets/meenakshi_amman_temple.jpg' },
    { id: 9, name: 'Amber Fort', epiIndex: 78.09, src: '/assets/amber_fort.jpg' },
    { id: 10, name: 'Mysore Palace', epiIndex: 78.04, src: '/assets/mysore_palace.jpg' },
  ];

  private tourist_switzerland: Array<touristSpots> = [
    { id: 1, name: 'Matterhorn', epiIndex: 87.67, src: '/assets/matterhorn.jpg'},
    { id: 2, name: 'Chateau de Chillon', epiIndex: 83.29, src: '/assets/chateau_de_chillon.jpg' },
    { id: 3, name: 'Jungfraujoch', epiIndex: 82.4 , src: '/assets/jungfraujoch.jpg'},
    { id: 4, name: 'Chapel Bridge', epiIndex: 81.78, src: '/assets/chapel_bridge.jpg' },
    { id: 5, name: 'Bernina Express', epiIndex: 81.47, src: '/assets/bernina_express.jpg' },
    { id: 6, name: 'Zytglogge', epiIndex: 80.47, src: '/assets/zytglogge.jpg' },
    { id: 7, name: 'Rhine Falls', epiIndex: 79.09, src: '/assets/rhine_falls.jpg' },
    { id: 8, name: 'Grindelwald', epiIndex: 78.32, src: '/assets/grindelwald.jpg' },
    { id: 9, name: "Jet d'Eau", epiIndex: 78.09, src: '/assets/jet_deau.jpg' },
    { id: 10, name: 'Mount Pilatus', epiIndex: 78.04, src: '/assets/mount_pilatus.jpg' },
  ];

  getAmericaTouristSpots(): Observable<any> {
    return of(this.tourist_america);
  }

  getIndiaTouristSpots(): Observable<any> {
    return of(this.tourist_india);
  }

  getSwitzerlandTouristSpots(): Observable<any> {
    return of(this.tourist_switzerland);
  }
}
