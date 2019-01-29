import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-training',
  templateUrl: './post-training.component.html',
  styleUrls: ['./post-training.component.css']
})
export class PostTrainingComponent implements OnInit {
  Stringinterpolation : string ="subash";
  text: string;
  status : boolean= false;
  list : any=[1,2,3,4,5];

  constructor() { }

  ngOnInit() {

  }

  checking(event: Event){
    //console.log((<HTMLInputElement>event.target).value);
  }

  submit(){
    console.log("this is submit");
    this.list.push(this.text);
    this.status=true;
  }
}
