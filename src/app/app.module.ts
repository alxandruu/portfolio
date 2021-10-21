import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { CvComponent } from './_components/cv/cv.component';
import { NavbarComponent } from './_components/navbar/navbar.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
