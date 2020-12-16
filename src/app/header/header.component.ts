import {Component, Output, EventEmitter} from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']

})

export class HeaderComponent {
    @Output() FeatureSelected = new EventEmitter<string>();
    OnFeatureSelect(feature:string){
        this.FeatureSelected.emit(feature);
    }

}
