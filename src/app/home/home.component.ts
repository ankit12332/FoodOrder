import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];
  tas:Tag[]= [];

  constructor(private foodService:FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllFoods();
    this.searchFood();
  }

  getAllFoods(){
    this.foods = this.foodService.getAll();
  }

  searchFood(){
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods= this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      }
      else if(params['tag']){
        this.foods= this.foodService.getAllFoodsByTag(params['tag']);
      }
    })
  }
}
