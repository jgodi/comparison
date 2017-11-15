import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  catNames: string[] = [
    'Ginger',
    'Sparkles',
    'Mr. Snuffles',
    'Nikita',
    'Mrs. Napper',
    'Nappy McNappyton'
  ];

  constructor() { }

  ngOnInit() {
  }

}
