import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/_interfaces/resource';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resources: Array<Resource>;
  constructor(private api: ApiService) {
    this.resources = this.api.getResources();
   }

  ngOnInit(): void {
  }

}
