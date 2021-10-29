import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';
import { Blog } from '../_interfaces/blog';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  projects: Project[] = [
    { id: "attiapp", type: "big", name: "Attia APP", img: "attiapp.jpg", description: "Web Application where you can manage the essential information of a business.", website: "", platform: ["Web Application"], stack: ["Angular", "PHP", "mySQL"], imgs: ["attiapp.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg", "preview_4.jpeg", "preview_5.jpeg"] },
    { id: "ocaonline", type: "small", name: "La Oca Online", img: "laocaonline.jpg", description: "Online Version of a popular spanish board game, this version is only for two players.", website: "https://alxandruu.github.io/daw-laocaonline/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript"], imgs: ["laocaonline.jpg"] },
    { id: "minatoshop", type: "small", name: "Minato Shop", img: "minatoshop.jpg", description: "Online commerce where you can find minimalism clothes and accesories.", website: "https://alxandruu.github.io/daw-escaparatevirtual/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript", "JSON"], imgs: ["minatoshop.jpg"] },
  ];

  constructor() {
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
}
