import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Vada Pav','vada pav description','https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/vada-pav-recipe-1.jpg'),
  new Recipe('Vada Pav','vada pav description','https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/vada-pav-recipe-1.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
