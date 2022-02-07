import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Profile } from 'src/app/_interfaces/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  portfolio: Profile;

  constructor(pd: PortfolioDataService) {

    this.portfolio = pd.getProfile(localStorage.getItem("language"));
  }

  ngOnInit(): void {
  }

}
