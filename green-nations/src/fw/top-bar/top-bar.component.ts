import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { ScreenService } from '../services/screen.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public frameworkConfigService: FrameworkConfigService,
    private userApi: UserApi, private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.userApi.signOut();
  }

  isScreenLarge() : boolean {
    return this.screenService.isLarge();
  }
}
