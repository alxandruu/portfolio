import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from 'src/app/_interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  latestblogs: Array<Blog> | null;
  allblogs: Array<Blog> | null;
  constructor(private ts: Title) {
    this.ts.setTitle("Gabriel Alexandru | Blog");
    this.latestblogs = null;
    this.allblogs = null;
  }

  ngOnInit(): void {
    
  }

}
