import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Blog } from 'src/app/_interfaces/blog';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { UtilsService } from 'src/app/_services/utils.service';
import moment from 'moment';
import languageData from 'src/assets/data/global/blogs/bl-view/i18n.json';


@Component({
  selector: 'app-bl-view',
  templateUrl: './bl-view.component.html',
  styleUrls: ['./bl-view.component.scss']
})
export class BlViewComponent implements OnInit {
  blog!: Blog;
  text: LanguageTextGroup;
  date: String;

  constructor(private ar: ActivatedRoute, private pd: PortfolioDataService, private ut: UtilsService) {
    this.ar.params.subscribe(params => {
      this.blog = this.pd.getBlog(params['id']);
    });
    this.text = this.ut.getLanguageText(languageData);
    this.date = this.buildDate();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  private buildDate(): String {
    let blogDate = moment(this.blog.date).locale(this.ut.lang);
    let date = blogDate.format('dddd, DD MMMM YYYY');
    return date;
  }

}





