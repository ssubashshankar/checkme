import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform : FormGroup;
  maxdate;
  checkdate = false;
  hide =true;
  date :Date;
  constructor(private formbuild:FormBuilder) { 
    this.signupform =this.formbuild.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      username:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      date:['',Validators.compose([Validators.required])],
      agree:['',Validators.required]
    })
    

  }
  
  ngOnInit() {
    this.maxdate = new Date();
    this.maxdate.setFullYear(this.maxdate.getFullYear() -18);
  }

 


  signup(signupform:FormGroup){
    
    console.log(signupform.value);
    // var date=new Date();
    // date=signupform.value.date;
    //  var today= new Date();
    
    // this.checkdate=today.getFullYear()-date.getFullYear() >18;
    // if (this.checkdate) {
      
    // }
  
  }


  getErrorMessage(){
    return this.signupform.hasError('email') ? '' :'Enter a valid email';
   }

}
