import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from 'src/app/_interfaces/blog';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { UtilsService } from 'src/app/_services/utils.service';
import languageData from 'src/assets/data/global/global_blog.json';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  latestblogs: Array<Blog> | null;
  allblogs: Array<Blog> | null;
  text: LanguageTextGroup;

  constructor(private ut: UtilsService) {
    this.latestblogs = null;
    this.allblogs = null;
    this.text = this.ut.getLanguageText(languageData);
  }

  ngOnInit(): void {

  }

}
