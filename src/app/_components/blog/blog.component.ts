import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from 'src/app/_interfaces/blog';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  latestblogs: Array<Blog>;
  allblogs: Array<Blog>;
  constructor(private api: ApiService, private ts: Title) {
    this.ts.setTitle("Gabriel Alexandru | Blog");
    this.latestblogs = this.api.getBlog(3);
    this.allblogs = this.api.getBlog();
    
  }

  ngOnInit(): void {
  }

}
