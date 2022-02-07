import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';
import { Blog } from '../_interfaces/blog';
import { Resource } from '../_interfaces/resource';
import { Category } from '../_interfaces/category';
import { PortfolioDataService } from '../_data/portfolio-data.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private projects: Array<Project>;
  private categories: Array<Category>;
  private resources: Array<Resource>;
  private blog: Array<Blog>;
 
  constructor(dt: PortfolioDataService) {
    this.projects = dt.projects;
    this.categories = dt.categories;
    this.resources = dt.resources;
    this.blog = dt.blog;
  }



  getCategories(id: string = ""): any {
    const categories = this.categories;
    if (id != "") {
      let category = categories.find(element => element.id === id);
      return category;

    } else {
      return categories;
    }
  }


  getProjects(type: string = "") {
    const projects = this.projects;
    if (type != "") {
      let arr: Project[] = [];
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].type == type) {
          arr.push(projects[i]);
        }
      }
      return arr;
    } else {
      return projects;
    }
  }

  getProject(id: string): any {
    const projects = this.projects;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == id) {
        return projects[i];
      }
    }
    return null;
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

  getResources(id: string = ''): Array<Resource> {
    const resources = this.resources;
    if (id != '' && id != this.categories[0].id) {
      const filterResources = resources.filter(r => {
        let category = r.category;
        return category.includes(id);
      });
      return filterResources;
    } else {
      return resources;
    }

  }
}
