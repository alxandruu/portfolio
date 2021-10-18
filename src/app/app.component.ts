import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  constructor(private http: HttpClient) {

    let url: string = `${window.location.protocol}//${window.location.hostname}:${location.port}/assets/data/data.json`;
    this.http.get(url).subscribe((res) => {
      this.data = res;
     
    })
  }

  ngOnInit(): void {
  }

}
