import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catNames: string[] = [
    'Ginger',
    'Sparkles',
    'Mr. Snuffles',
    'Nikita',
    'Mrs. Napper',
    'Nappy McNappyton'
  ];
}
