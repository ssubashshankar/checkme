import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadernavComponent } from './headernav/headernav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatCardModule, MatTabsModule, MatStepperModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PostTrainingComponent } from './training/post-training/post-training.component';
import { StopTrainingComponent } from './training/new-training/stop-training.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './youtube/search-box/search-box.component';
import { SearchResultComponent } from './youtube/search-result/search-result.component';
import { CanActivateService } from './can-activate.service';

const route:Routes=[
  {
  path:'home' , component: HomeComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'signup' , component : SignupComponent
  },
  {
    path:'login' , component : LoginComponent
  },
  {
    path:'training',component:TrainingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HeadernavComponent,
    SignupComponent,
    WelcomeComponent,
    HomeComponent,
    TrainingComponent,
    NewTrainingComponent,
    PostTrainingComponent,
    StopTrainingComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,  
    MatDialogModule,
    HttpClientModule,   
    RouterModule.forRoot(route),
    

   
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
  entryComponents :[StopTrainingComponent]
})
export class AppModule { }
