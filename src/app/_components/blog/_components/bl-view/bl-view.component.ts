import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Blog } from 'src/app/_interfaces/blog';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { UtilsService } from 'src/app/_services/utils.service';
import languageData from 'src/assets/data/global/blogs/bl-view/i18n.json';


@Component({
  selector: 'app-bl-view',
  templateUrl: './bl-view.component.html',
  styleUrls: ['./bl-view.component.scss']
})
export class BlViewComponent implements OnInit {
  blog!: Blog;
  text: LanguageTextGroup;

  constructor(private ar: ActivatedRoute, private pd: PortfolioDataService, private ut: UtilsService) {
    this.ar.params.subscribe(params => {
      this.blog = this.pd.getBlog(params['id']);
    });
    this.text = this.ut.getLanguageText(languageData);

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}





