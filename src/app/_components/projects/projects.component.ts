import { Component, OnInit } from '@angular/core';
import { ProjectGroup } from '../../_interfaces/project';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { UtilsService } from 'src/app/_services/utils.service';
import languageData from 'src/assets/data/global/global_projects.json';
import projectsGroups from 'src/assets/data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('125ms', [
          animate('350ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-20%)' }),
            style({ opacity: 0.5, transform: 'translateX(5%)' }),
            style({ opacity: 1, transform: 'translateX(0)' })
          ]))
        ]), { optional: true })
      ])
    ]),

  ]
})
export class ProjectsComponent implements OnInit {

  projects: ProjectGroup;
  text: LanguageTextGroup;


  constructor(private ut: UtilsService) {
    this.projects = ut.getDataByLang(projectsGroups);
    this.text = this.ut.getLanguageText(languageData);
  }

  ngOnInit(): void {
  }

}
