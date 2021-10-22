import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss']
})
export class PrComponent implements OnInit {
  @Input() pr: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
