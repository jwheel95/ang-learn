import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg')
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
