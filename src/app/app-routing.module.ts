import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './_components/cv/cv.component';
import { ProjectsComponent } from './_components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
