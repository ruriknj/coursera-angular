
import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish:Dish;

  constructor() { }

  ngOnInit() {
  }

}
