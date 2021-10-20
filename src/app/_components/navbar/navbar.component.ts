import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public social_media: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData("social_media.json").subscribe(data => {
      this.social_media = data;
    })
  }

}
