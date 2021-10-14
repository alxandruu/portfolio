import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cv/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './cv/content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    ProjectsComponent,
    CvComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
