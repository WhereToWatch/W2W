import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit,AfterViewInit {

  constructor() { 
    document.body.style.background = '#0f171e';
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    let swipercontainer = <HTMLElement>document.querySelector('.swiper-container');
    swipercontainer.style.background ='#0f171e';
  }

}
