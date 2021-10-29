import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.scss']
})
export class BlComponent implements OnInit {
  @Input() bl: any = [];
  constructor() {}

  ngOnInit(): void {
  }

}
