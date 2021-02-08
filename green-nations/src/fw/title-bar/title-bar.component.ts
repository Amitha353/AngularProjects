import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  screenCapture: boolean = true;
  showInformation: boolean = false;
  showMenuInformation: boolean = false;
  constructor(private screenService: ScreenService,
    private menuService: MenuService) { }

  ngOnInit(): void {
  }
  
  isScreenLarge() : boolean {
    return this.screenService.isLarge();
  }

  showInfo() {
    this.showInformation = !this.showInformation; 
  }

  showMenu() {
    this.showMenuInformation = !this.showMenuInformation;
    console.log("Menu - Info ", this.showMenuInformation);
  }
}
