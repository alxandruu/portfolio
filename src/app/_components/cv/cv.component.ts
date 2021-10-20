import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cv: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData("curriculum.json").subscribe(data => {
      this.cv = data;
    })
  }

}
