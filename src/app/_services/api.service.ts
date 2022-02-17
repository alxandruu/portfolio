import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';
import { Blog } from '../_interfaces/blog';
import { Resource } from '../_interfaces/resource';
import { Category, CategoryGroup } from '../_interfaces/category';
import { PortfolioDataService } from '../_data/portfolio-data.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private categories: CategoryGroup;
  private blog: Array<Blog>;
 
  constructor(dt: PortfolioDataService) {
    this.categories = dt.getCategories();
    this.blog = dt.blog;
  }



  getCategories(id: string = ""): any {
    const categories = this.categories;
    if (id != "") {
      let category = categories.data.find(element => element.id === id);
      return category;

    } else {
      return categories;
    }
  }


  

  

  getBlog(index: number = 0) {
    const blog = this.blog.sort((a, b) => b.date.getTime() - a.date.getTime());
    if (index == 0) {
      return blog;
    } else {
      return blog.slice(0, index);
    }
  }

  getOneBlog(id: string): any {
    const blog = this.blog;
    for (let i = 0; i < blog.length; i++) {
      if (blog[i].id == id) {
        return blog[i];
      }
    }
    return null;
  }

  
}
