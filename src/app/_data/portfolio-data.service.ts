import { Injectable } from '@angular/core';
import { Blog } from '../_interfaces/blog';
import { Category, CategoryGroup } from '../_interfaces/category';
import { Navbar } from '../_interfaces/navbar';
import { Profile } from '../_interfaces/profile';
import { Project, ProjectGroup } from '../_interfaces/project';
import { Resource, ResourceGroup } from '../_interfaces/resource';
import { UtilsService } from '../_services/utils.service';

// DATA FROM JSON
import profile from 'src/assets/data/profile.json';
import projects from 'src/assets/data/projects.json';
import resources from 'src/assets/data/resources/resources.json';
import resources_categories from 'src/assets/data/resources/categories.json';
import global_navbar from 'src/assets/data/global/navbar.json';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private ut: UtilsService) {
    this._profile = profile;
    this._projects = projects;
    this._resources = resources;
    this._categories = resources_categories;
    this._navbar = global_navbar;
  }

  public getProfile(): any {
    const lang = this.ut.lang;
    const profiles = this._profile;
    let profile = null;
    for (let i = 0; i < profiles.length && !profile; i++) {
      if (profiles[i].lang == lang) {
        profile = profiles[i];
      }
    }

    return profile;
  }

  public getNavbar(): any {
    const lang = this.ut.lang;
    const navbar = this._navbar;
    let navs = null;
    for (let i = 0; i < navbar.length && !navs; i++) {
      if (navbar[i].lang == lang) {
        navs = navbar[i];
      }
    }

    return navs;
  }


  // Projects Functions
  getProjects(): any {
    const lang = this.ut.lang;
    const projects = this._projects;
    let project_group = null;
    for (let i = 0; i < projects.length && !project_group; i++) {
      if (projects[i].lang == lang) {
        project_group = projects[i];
      }
    }

    return project_group;
  }

  getProject(id: string): any {
    const projects: ProjectGroup = this.getProjects();
    for (let i = 0; i < projects.data.length; i++) {
      if (projects.data[i].id == id) {
        return projects.data[i];
      }
    }
    return null;
  }


  // Categories Functions
  getCategories(): any {
    const lang = this.ut.lang;
    const categories = this._categories;
    let category_group = null;
    for (let i = 0; i < categories.length && !category_group; i++) {
      if (categories[i].lang == lang) {
        category_group = categories[i];
      }
    }

    return category_group;
  }

  getCategory(id: string): any {
    const categories: CategoryGroup = this.getCategories();
    for (let i = 0; i < categories.data.length; i++) {
      if (categories.data[i].id == id) {
        return categories.data[i];
      }
    }
    return null;
  }

  // Resources Functions
  getResources(): any {
    const lang = this.ut.lang;
    const resources = this._resources;
    let resource_group = null;
    for (let i = 0; i < resources.length && !resource_group; i++) {
      if (resources[i].lang == lang) {
        resource_group = resources[i];
      }
    }

    return resource_group;
  }

  filterResources(id: string): any {
    const resources: ResourceGroup = this.getResources();
    const categories: CategoryGroup = this.getCategories();

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

  private _navbar: Array<Navbar>;

  private _profile: Array<Profile>;

  private _projects: Array<ProjectGroup>;

  private _categories: Array<CategoryGroup>;

  private _resources: Array<ResourceGroup>;
}
