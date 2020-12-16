import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] =[new Recipe('A Test Recipe','A Simple test recipe','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg'),new Recipe('A Test Recipe','A Simple test recipe','https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg')] 
 @Output() selectedItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(item: Recipe){

this.selectedItem.emit(item);
  }

}
