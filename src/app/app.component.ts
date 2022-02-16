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
    ut.lang = localStorage.getItem("language");
  }




  ngOnInit(): void { }

  changeLang(key: string) {
    this.ut.changeLanguage(key);
    window.location.reload();
  }

}
