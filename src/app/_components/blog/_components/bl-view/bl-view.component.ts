import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/_interfaces/blog';

@Component({
  selector: 'app-bl-view',
  templateUrl: './bl-view.component.html',
  styleUrls: ['./bl-view.component.scss']
})
export class BlViewComponent implements OnInit {
  blog!: Blog;
  
  constructor(private ar: ActivatedRoute) {


  }


  ngOnInit(): void {
    window.scroll(0, 0);
  }

  loadHTML(file: string) {
  }

}
