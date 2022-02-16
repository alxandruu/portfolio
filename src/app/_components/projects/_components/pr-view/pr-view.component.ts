import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { Project } from 'src/app/_interfaces/project';
import { ApiService } from 'src/app/_services/api.service';
import { UtilsService } from 'src/app/_services/utils.service';

@Component({
  selector: 'app-pr-view',
  templateUrl: './pr-view.component.html',
  styleUrls: ['./pr-view.component.scss']
})
export class PrViewComponent implements OnInit {
  project!: Project;
  text: LanguageTextGroup;

  constructor(private ar: ActivatedRoute, pd: PortfolioDataService, private ut: UtilsService) {
    this.ar.params.subscribe(params => {
      this.project = pd.getProject(params['id']);
    });
    this.text = this.getLanguageText();
  }

  ngOnInit(): void {
  }

  private languageTexts: Array<LanguageTextGroup> = [
    { lang: "es", data: ["Proyectos", "Sitio Web", "Plataforma", "Stack", "No Desplegado", "En Desarrollo"] },
    { lang: "en", data: ["Projects", "Website", "Platform", "Stack", "Not Deployed", "In Development"] }
  ]

  private getLanguageText(): any {
    const lang = this.ut.lang;
    const languageTexts = this.languageTexts;
    let languageTextGroup = null;
    for (let i = 0; i < languageTexts.length && !languageTextGroup; i++) {
      if (languageTexts[i].lang == lang) {
        languageTextGroup = languageTexts[i];
      }
    }

    return languageTextGroup;
  }

}
