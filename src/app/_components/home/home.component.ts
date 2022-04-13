import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_interfaces/profile';
import { UtilsService } from 'src/app/_services/utils.service';
import profile from 'src/assets/data/profile.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  portfolio: Profile;

  constructor(ut: UtilsService) {
    this.portfolio = ut.getDataByLang(profile);
  }

  ngOnInit(): void {
  }

}
