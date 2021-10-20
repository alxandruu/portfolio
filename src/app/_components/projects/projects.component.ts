import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData: any = [];
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getData("projects.json").subscribe(data => {
      this.projectsData = data;
      console.log(this.projectsData);
    })

  }

}
