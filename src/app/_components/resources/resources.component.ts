import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CategoryGroup } from 'src/app/_interfaces/category';
import { LanguageTextGroup } from 'src/app/_interfaces/language-text-group';
import { ResourceGroup } from 'src/app/_interfaces/resource';
import { UtilsService } from 'src/app/_services/utils.service';

import languageData from 'src/assets/data/global/global_resources.json';
import resources_categories from 'src/assets/data/resources/categories.json';
import resources from 'src/assets/data/resources/resources.json';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],

})
export class ResourcesComponent implements OnInit {
  public resources: ResourceGroup;
  public categories: CategoryGroup;
  le: number;
  id: string = 'c0';
  text: LanguageTextGroup;

  constructor(private ut: UtilsService) {
    this.resources = ut.getDataByLang(resources);
    this.categories = ut.getDataByLang(resources_categories);
    this.le = this.resources.data.length;
    this.text = this.ut.getLanguageText(languageData);


  }

  ngOnInit(): void {


  }


  getCategoryName(id: string) {
    return this.ut.getObjectFromData(resources_categories, id);
  }

  filterByCategory(id: string) {
    this.id = id;
    this.le = this.filterResources(id).length;
  }




  filterResources(id: string): any {
    const resources: ResourceGroup = this.resources;
    const categories: CategoryGroup = this.categories;

    if (id != categories.data[0].id) {
      const filterResources = resources.data.filter(r => {
        let category = r.category;
        return category.includes(id);
      });
      return filterResources;
    } else {
      return resources.data;
    }
  }

  showResources(): void {
    document.querySelector(".category-filter")?.classList.toggle("show");
    document.querySelector('.category-filter-mobile')?.classList.toggle('active');
  }
}
