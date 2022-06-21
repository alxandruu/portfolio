import { Component } from '@angular/core';
import { UtilsService } from './_services/utils.service';

declare let $: any; //jQuery

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
    document.querySelector('.switcher.mobile.' + (this.ut.theme == "dark" ? "light" : "dark"))?.classList.add("active");
  }

  changeLang(key: string) {
    this.ut.changeLanguage(key);
    window.location.reload();
  }

  switchTheme(key: string) {
    document.querySelector('.switcher.active')?.classList.toggle('active');
    document.querySelector(".switcher." + key)?.classList.toggle("active");
    document.querySelector('.switcher.mobile.active')?.classList.toggle('active');
    document.querySelector(".switcher.mobile." + key)?.classList.toggle("active");
    let keyTheme = (key == "light") ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', keyTheme);
    localStorage.setItem('theme', keyTheme);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

$(window).scroll(function () {
  if ($(window).scrollTop() < 250 || $(window).scrollTop() >= $(document).height()) {
    $('.scrollTopButton').hide(250);
  }
  else {
    $('.scrollTopButton').show(250);
  }
});