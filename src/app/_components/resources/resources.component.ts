import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/_data/portfolio-data.service';
import { CategoryGroup } from 'src/app/_interfaces/category';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { ResourceGroup } from 'src/app/_interfaces/resource';
import { UtilsService } from 'src/app/_services/utils.service';
import languageData from 'src/assets/data/global/global_resources.json';


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
  public resources: ResourceGroup;
  public categories: CategoryGroup;
  le: number;
  id: string = 'c0';
  text: LanguageTextGroup;

  constructor(private pd: PortfolioDataService, private ut: UtilsService) {
    this.resources = pd.getResources();
    this.categories = pd.getCategories();
    this.le = this.resources.data.length;
    this.text = this.ut.getLanguageText(languageData);


  }

  ngOnInit(): void {


  }


  getCategoryName(id: string) {
    return this.pd.getCategory(id);
  }

  filterByCategory(id: string) {
    this.id = id;
    this.le = this.pd.filterResources(id).length;
  }
}
