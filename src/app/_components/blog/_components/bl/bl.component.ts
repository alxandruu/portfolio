import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.scss']
})
export class BlComponent implements OnInit {
  @Input() bl: any = [];
  outDate!: Date;
  constructor() {
  }

  ngOnInit(): void {
    this.outDate = new Date(this.bl.date);

  }

  isNew() {
    let date: Date = new Date(this.bl.date);
    console.log(date.getTime() - new Date().getTime(), date);
    return new Date().getTime() - date.getTime() <= 7 * 86400000;
  }
}
