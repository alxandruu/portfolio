import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { NavComponent } from './_components/nav/nav.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { PrComponent } from './_components/projects/_components/pr/pr.component';
import { PrViewComponent } from './_components/projects/_components/pr-view/pr-view.component';
import { BlogComponent } from './_components/blog/blog.component';
import { BlComponent } from './_components/blog/_components/bl/bl.component';
import { BlViewComponent } from './_components/blog/_components/bl-view/bl-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProjectsComponent,
    PrComponent,
    PrViewComponent,
    BlogComponent,
    BlComponent,
    BlViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
