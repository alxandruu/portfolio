import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_interfaces/category';
import { Resource } from 'src/app/_interfaces/resource';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resources: Array<Resource>;
  public categories;
  le: number;
  id: string = 'c0';

  constructor(private api: ApiService) {
    this.resources = this.api.getResources();
    this.categories = this.api.getCategories();
    this.le = this.resources.length;
  }

  ngOnInit(): void {

  }


  getCategoryName(id: string) {
    return this.api.getCategories(id);
  }

  filterByCategory(id: string) {
    this.id = id;
    this.le = this.api.getResources(id).length;
    
  }
}
