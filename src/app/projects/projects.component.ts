import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  big_projects: any = [
    {id:"attiapp", name: "Attia APP", img: "attiapp.jpg", description: "Web Application where you can manage all the data of a business." },

  ];
  small_projects: any = [
    {id:"ocaonline", name: "La Oca Online", img: "laocaonline.jpg", description: "Online Version of a popular board game called 'El juego de la Oca', this version is only for two players." },
    {id:"minatoshop", name: "Minato Shop", img: "minatoshop.jpg", description: "Clothes online commerce where you can find minimalism designs." },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
