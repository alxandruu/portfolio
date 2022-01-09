import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { PrViewComponent } from './_components/projects/_components/pr-view/pr-view.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { BlogComponent } from './_components/blog/blog.component';
import { BlViewComponent } from './_components/blog/_components/bl-view/bl-view.component';
import { ResourcesComponent } from './_components/resources/resources.component';
import { CreationsComponent } from './_components/creations/creations.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: PrViewComponent },
  {
    path: 'resources', component: ResourcesComponent
  },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlViewComponent },

  // {
  //   path: 'creations', component: CreationsComponent
  // },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
