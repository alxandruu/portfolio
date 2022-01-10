import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.scss']
})
export class BlComponent implements OnInit {
  @Input() bl: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  isNew() {
    console.log(this.bl.date.getTime() - new Date().getTime());
    return new Date().getTime() - this.bl.date.getTime() <= 7 * 86400000;
  }
}
