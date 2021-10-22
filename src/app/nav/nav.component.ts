import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public hamburguer(): void {
    document.querySelector(".hamburguer-bt")?.classList.toggle("on");
  }

  public toggleLight(): void {
    let arr = document.querySelectorAll('.visual_mode');
    let r: any = document.querySelector(':root');
    let btnShow: any = document.querySelector('.visual_mode.show');
  
    if (btnShow.classList.split(' ').includes('light')) {
      r.style.setProperty('--dark-color', '#f2fbe0');
      r.style.setProperty('--light-color', '#2a2d34');
    } else {
      r.style.setProperty('--dark-color', '#2a2d34');
      r.style.setProperty('--light-color', '#f2fbe0');
    }
    arr[0].classList.toggle('show');
    arr[1].classList.toggle('show');

  }
}
