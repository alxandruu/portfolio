import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pr-view',
  templateUrl: './pr-view.component.html',
  styleUrls: ['./pr-view.component.scss']
})
export class PrViewComponent implements OnInit {
  projects: any = [
    { id: "attiapp", name: "Attia APP", img: "attiapp.jpg", description: "Web Application where you can manage all the data of a business.", website: "https://github.com/alxandruu/attiapp", platform: ["Web Application"], stack: ["Angular", "PHP", "mySQL"], imgs: ["attiapp.jpg"] },
    { id: "ocaonline", name: "La Oca Online", img: "laocaonline.jpg", description: "Online Version of a popular board game called 'El juego de la Oca', this version is only for two players.", website: "https://alxandruu.github.io/daw-laocaonline/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript"], imgs: ["laocaonline.jpg"] },
    { id: "minatoshop", name: "Minato Shop", img: "minatoshop.jpg", description: "Clothes online commerce where you can find minimalism designs.", website: "https://alxandruu.github.io/daw-escaparatevirtual/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript", "JSON"], imgs: ["minatoshop.jpg"] },
  ];
  project: any = [];
  constructor(private ar: ActivatedRoute) {
    this.ar.params.subscribe(params => {
      let position = 0;
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id == params['id']) {
          position = i;
        }
      }
      this.project = this.projects[position];
    })
  }

  ngOnInit(): void {
  }

}
