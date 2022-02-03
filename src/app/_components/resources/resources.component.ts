import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_interfaces/category';
import { Resource } from 'src/app/_interfaces/resource';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('350ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-20%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(5%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ]))
        ]), { optional: true }),
        query(':leave', stagger('100ms', [
          animate('350ms ease-in', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(5%)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateX(-20%)', offset: 1.0 })
          ]))
        ]), { optional: true })
      ])
    ]),
   
  ]
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
