import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Project } from '../_interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  big_projects: Project[];
  small_projects: Project[];
  constructor(private api: ApiService) {
    this.big_projects = this.api.getProjects("big");
    this.small_projects = this.api.getProjects("small");

  }

  ngOnInit(): void {
  }

}
