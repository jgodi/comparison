import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css']
})
export class CatSearchComponent implements OnInit {
  catImageSrc = 'http://thecatapi.com/api/images/get?format=src&type=gif';

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  generateNewCat() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe((data) => {
      this.catImageSrc = data['message'];
    });
  }
}
