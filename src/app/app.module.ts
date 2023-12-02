import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:"",component:LayoutComponent,
      canActivateChild[()=>inject(AuthService).checkIsAuth()],
      children:[{
        path:"",component:HomeComponent
      },
    {
      path:"about",component:AboutComponent
    },
  {
    path:"about",
    component:AboutComponent
  }]
    },
  {
    path:"login",component:LoginComponent
  }])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
