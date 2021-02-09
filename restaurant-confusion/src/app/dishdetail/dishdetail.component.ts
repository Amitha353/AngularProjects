import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    // @Input()
    // dish: Dish;
    dish: Dish;

    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id.toLocaleString());
    }
  
    goBack(): void {
      this.location.back();
    }
}
