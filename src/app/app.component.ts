import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureShown = 'recipe' ;
  ContentShow (feature: string){
    this.featureShown = feature;
  }
}
