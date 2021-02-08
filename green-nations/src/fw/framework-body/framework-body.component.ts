import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-framework-body',
  templateUrl: './framework-body.component.html',
  styleUrls: ['./framework-body.component.css']
})
export class FrameworkBodyComponent implements OnInit {
  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

}
