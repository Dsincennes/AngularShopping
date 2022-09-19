import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1'
    +'.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1641226119%2'
    +'FGettyImages-1156433077.jpg%3Fitok%3DG8JqIVht'),
    new Recipe('Another Test Recipe', 'Test Description', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1'
    +'.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1641226119%2'
    +'FGettyImages-1156433077.jpg%3Fitok%3DG8JqIVht')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
