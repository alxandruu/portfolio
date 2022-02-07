import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { Navbar } from 'src/app/_interfaces/navbar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navbar: Navbar;

  constructor(pd: PortfolioDataService) {
    this.navbar = pd.getNavbar(localStorage.getItem("language"));
  }

  ngOnInit(): void {

  }

  public hamburguer(): void {
    document.querySelector("#hamb_menu")?.classList.toggle("show");
    document.querySelector('.hambBtn')?.classList.toggle('active');
  }


}
