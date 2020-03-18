import { Component, OnInit } from '@angular/core';
import { Swiper, Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  constructor() { }
  swiperInit()
  {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);
    var startSwiper; 
    if (window.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches)
    {   
        startSwiper = new Swiper('.billboard.swiper-container', {
            speed: 600,
            autoHeight: true,
            simulateTouch:false,
            effect: 'fade',
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay:{
                delay: 5000,
                disableOnInteraction: false,
            }
        });
    }
    else
    {
        startSwiper = new Swiper('.billboard.swiper-container', {
            speed: 600,
            effect: 'fade',
            grabCursor: true,
            simulateTouch:false,
            loop:true,
            autoplay:{
                delay: 5000,
                disableOnInteraction: false,
            }
        });
    };
  }
  ngOnInit() {
        this.swiperInit();
        if($(window).width() >= 1024 && $(window).width() < 2201)
        {

        } 
  }

}
