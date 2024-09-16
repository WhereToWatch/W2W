import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit,AfterViewInit {

  constructor() { 
    document.body.style.background = '#10599E';
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    let swipercontainer = <HTMLElement>document.querySelector('.swiper-container');
    swipercontainer.style.background ='#10599E';
  }

}
