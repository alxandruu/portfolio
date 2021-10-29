import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/_interfaces/blog';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-bl-view',
  templateUrl: './bl-view.component.html',
  styleUrls: ['./bl-view.component.scss']
})
export class BlViewComponent implements OnInit {
  blog!: Blog;
  constructor(private ar: ActivatedRoute, private api: ApiService) {
    this.ar.params.subscribe(params => {
      this.blog = this.api.getOneBlog(params['id']);
    });
   
  }


  ngOnInit(): void {
    window.scroll(0, 0);
  }

  loadHTML(file: string) {
  }

}
