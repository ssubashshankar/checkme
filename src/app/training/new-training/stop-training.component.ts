import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-stop-training',
    templateUrl :'./stop-training.component.html'
})
export class StopTrainingComponent{
    constructor( @Inject(MAT_DIALOG_DATA) public passed:any){}
}