import { Component, OnInit } from '@angular/core';
import { ProjectGroup } from '../../_interfaces/project';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';

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
            style({ opacity: 0, transform: 'translateX(-20%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(5%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ]))
        ]), { optional: true })
      ])
    ]),

  ]
})
export class ProjectsComponent implements OnInit {

  projects: ProjectGroup;


  constructor(pd: PortfolioDataService) {
    this.projects = pd.getProjects();

  }

  ngOnInit(): void {
  }

}
