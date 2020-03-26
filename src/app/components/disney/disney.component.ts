import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css']
})
export class DisneyComponent implements OnInit,AfterViewInit {

  constructor() { 
    document.body.style.background = '#212433';
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    let swipercontainer = <HTMLElement>document.querySelector('.swiper-container');
    swipercontainer.style.background ='#212433';
  }

}
