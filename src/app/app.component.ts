import { Component } from '@angular/core';
import { UtilsService } from './_services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public year = new Date().getFullYear();


  constructor(private ut: UtilsService) {
    ut.webpageLanguage();
    ut.webpageTheme();
    ut.lang = localStorage.getItem("language");

  }




  ngOnInit(): void {
    document.querySelector('.switcher.' + (this.ut.theme == "dark" ? "light" : "dark"))?.classList.add("active");
  }

  changeLang(key: string) {
    this.ut.changeLanguage(key);
    window.location.reload();
  }

  switchTheme(key: string) {
    document.querySelector('.switcher.active')?.classList.toggle('active');
    document.querySelector(".switcher." + key)?.classList.toggle("active");

    document.documentElement.setAttribute('data-theme', (key == "light") ? "dark" : "light");
    localStorage.setItem('theme', key);
  }

}
