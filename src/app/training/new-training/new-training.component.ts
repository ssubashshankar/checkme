import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  exerciseform : FormGroup;
  startExercise :String;
  progress= false;
  starting = 0;
  timer : number;
  exercise=["triceps","biceps","dips","chest"];
  progressNote: String="You are Doing Great!! Keep Doing..";
  constructor(private formbuild:FormBuilder, private dialog :MatDialog) {
    this.exerciseform=this.formbuild.group({
      selection:['']
    }); 
   }

  ngOnInit() {
  }
  submitexercise(exercise : FormGroup){
    this.startExercise = exercise.value.selection;
  //  console.log(this.startExercise);
  this.progress = true;
  this.startProgress();
  }
  startProgress(){
    this.timer=setInterval(()=>{
      this.starting = this.starting + 5;
      if (this.starting>=100) {
        this.progressNote="You are done..";
        clearInterval(this.timer);
        this.starting = 0;
      }
    },1000);  
  }

  stopProgress(){
    const dialogref=this.dialog.open(StopTrainingComponent, {data :{
      progress :this.starting
    }});
    dialogref.afterClosed().subscribe(result=>{
      if (result) {
       // this.startProgress();
      }
      else{
        this.starting =0;
        this.progress = result;
      }
    });
  }

}
