import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './_services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

}
