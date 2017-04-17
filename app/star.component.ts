import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: `
        <i 
            class="glyphicon"
            [class.glyphicon-star]="isActive"
            [class.glyphicon-star-empty]="!isActive"
            (click)="onClick()">        
        </i>
    `,
})
export class StarComponent{
    isActive:boolean = true;
    onClick(){
        this.isActive=!this.isActive;
    }
}