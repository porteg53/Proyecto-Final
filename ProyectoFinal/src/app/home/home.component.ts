import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    { short: '', src: "assets/img/img1.png"},
    {title: '', short: '', src: "assets/img/img2.png"},
    {title: '', short: 't', src: "assets/img/img3.png"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;

    config.pauseOnHover = true;
  }
  ngOnInit(): void {
  }

}
