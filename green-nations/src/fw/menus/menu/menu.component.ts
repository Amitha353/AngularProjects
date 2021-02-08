import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/fw/services/screen.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService, private screenService: ScreenService) { }

  ngOnInit() {
  }
  
  public isScreenLarge() {
    return this.screenService.isLarge;
  }

}
