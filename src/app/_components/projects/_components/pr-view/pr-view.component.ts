import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { Project } from 'src/app/_interfaces/project';
import { UtilsService } from 'src/app/_services/utils.service';
import projectsGroups from 'src/assets/data/projects.json';
import languageData from 'src/assets/data/global/global_projects_view.json';


@Component({
  selector: 'app-pr-view',
  templateUrl: './pr-view.component.html',
  styleUrls: ['./pr-view.component.scss']
})
export class PrViewComponent implements OnInit {
  project!: Project;
  text: LanguageTextGroup;

  constructor(private ar: ActivatedRoute, private ut: UtilsService) {
    this.ar.params.subscribe(params => {
      this.project = ut.getObjectFromData(projectsGroups, params['id']);
    });
    this.text = this.ut.getLanguageText(languageData);
  }

  ngOnInit(): void {

  }

}
