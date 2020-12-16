import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients} from '../../shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
@ViewChild('name') nameRef: ElementRef;
@ViewChild('amount') amountRef: ElementRef;
@Output() addedItem = new EventEmitter<Ingredients>();
  ngOnInit(): void {
  }
  OnAdd(){
    const nameVal = this.nameRef.nativeElement.value;
    const amountVal = this.amountRef.nativeElement.value;
    const newingredient = new Ingredients(nameVal, amountVal);
    this.addedItem.emit(newingredient);


  }

}
