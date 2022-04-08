import { Component, Input, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.scss']
})
export class BlComponent implements OnInit {
  @Input() bl: any = [];
  outDate!: Date;
  constructor(private pd: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.outDate = new Date(this.bl.date);

  }

  isNew() {
    let date: Date = new Date(this.bl.date);
    console.log(date.getTime() - new Date().getTime(), date);
    return new Date().getTime() - date.getTime() <= 7 * 86400000;
  }

  getCategoryName(id: string) {
    console.log(id);
    return this.pd.getBlogCategory(id);
  }
}
