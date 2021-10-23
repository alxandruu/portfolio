import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_interfaces/project';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-pr-view',
  templateUrl: './pr-view.component.html',
  styleUrls: ['./pr-view.component.scss']
})
export class PrViewComponent implements OnInit {
  project!: Project;
  constructor(private ar: ActivatedRoute, private api: ApiService) {
    this.ar.params.subscribe(params => {
      this.project = this.api.getProject(params['id']);
    })

  }

  ngOnInit(): void {
  }

}
