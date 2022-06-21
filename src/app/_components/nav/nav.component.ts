import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/_interfaces/navbar';
import { UtilsService } from 'src/app/_services/utils.service';
import global_navbar from 'src/assets/data/global/navbar.json'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navbar: Navbar;

  constructor(private ut: UtilsService) {
    this.navbar = ut.getDataByLang(global_navbar);
  }

  ngOnInit(): void {

  }

  public hamburguer(): void {
    document.querySelector("#hamb_menu")?.classList.toggle("show");
    document.querySelector('.hambBtn')?.classList.toggle('active');
  }

  changeLang(key: string) {
    this.ut.changeLanguage(key);
    window.location.reload();
  }

}
