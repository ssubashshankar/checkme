import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, FormGroup, FormBuilder } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { user } from '../user';
import { RouterService } from '../router.service';
import { AuthenticationService } from '../authentication.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= true;
  userlogin : FormGroup;
  loginuser : user;
   @ViewChild(FormGroupDirective)
   formGroupDirective:FormGroupDirective;
  
  constructor(private formbuild : FormBuilder , private router: RouterService,
    private auth:AuthenticationService) { 
     this.userlogin = this.formbuild.group({
      userId:['',Validators.compose([Validators.required,Validators.minLength(5)])],
       password :['',Validators.compose([Validators.required,Validators.minLength(5)])]
     }); 
     this.loginuser= new user();
  }
  
  ngOnInit() {
  }
  loginform(userlogin : FormGroup){
       this.loginuser=userlogin.value;
       this.formGroupDirective.resetForm();
      // this.auth.authenticateUser(this.loginuser).subscribe(result=>{
      //   console.log(result);
      // },error=>{
      //   console.log(error);
      // })
        

      }
  signup(){
    this.router.routeToSignup();
  }

}
