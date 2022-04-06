import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Blog, BlogGroup } from 'src/app/_interfaces/blog';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { UtilsService } from 'src/app/_services/utils.service';
import languageData from 'src/assets/data/global/global_blog.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  latestblogs: Array<Blog>;
  allblogs: Array<Blog>;
  text: LanguageTextGroup;

  constructor(private ut: UtilsService, private pd: PortfolioDataService) {
    this.allblogs = pd.getBlogs().data;
    this.latestblogs = this.recentBlogs();
    this.text = this.ut.getLanguageText(languageData);
  }

  ngOnInit(): void {

  }


  private recentBlogs(): Array<Blog> {
    const blogs: Array<Blog> = this.pd.getBlogs().data;

    return blogs;
  }
}
