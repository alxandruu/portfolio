import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Blog } from 'src/app/_interfaces/blog';

@Component({
  selector: 'app-bl-view',
  templateUrl: './bl-view.component.html',
  styleUrls: ['./bl-view.component.scss']
})
export class BlViewComponent implements OnInit {
  blog!: Blog;

  constructor(private ar: ActivatedRoute, private pd: PortfolioDataService) {
    this.ar.params.subscribe(params => {
      this.blog = this.pd.getBlog(params['id']);
    });

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}





