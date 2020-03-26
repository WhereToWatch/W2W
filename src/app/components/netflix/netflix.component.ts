import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit,AfterViewInit {

  constructor() {
    document.body.style.background = '#141414';
   }

  ngOnInit() {
  }
  ngAfterViewInit(){
    let swipercontainer = <HTMLElement>document.querySelector('.swiper-container');
    swipercontainer.style.background ='#141414';
  }

}
