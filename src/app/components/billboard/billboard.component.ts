import { Component, OnInit } from '@angular/core';
import { Swiper, Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {
    startSwiper; 


  constructor() { 

  }

  swiperMobile()
  {
    this.startSwiper = new Swiper('.billboard.swiper-container', {
        speed: 600,
        effect: 'fade',
        grabCursor: true,
        parallax: true,
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

  swiperDesktop()
  {
    this.startSwiper = new Swiper('.billboard.swiper-container', {
        speed: 600,
        autoHeight: true,
        simulateTouch:false,
        effect: 'fade',
        parallax: true,
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

  swiperTV(){
    this.startSwiper = new Swiper('.billboard.swiper-container', {
        speed: 600,
        autoHeight: true,
        simulateTouch:false,
        parallax: true,
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

  swiperInit()
  {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);
    if(window.matchMedia("(max-width: 1027px)").matches)
    {   
        this.swiperMobile();
    }
    else if(window.matchMedia("(min-width: 1028px) and (max-width: 1599px) and (orientation: portrait)").matches)
    {
        this.swiperMobile();
    }
    else if(window.matchMedia("(min-width: 1028px) and (max-width: 1599px) and (orientation: landscape)").matches)
    {
        this.swiperDesktop();
    }
    else if(window.matchMedia("(min-width: 1600px) and (orientation: landscape)").matches)
    {
        this.swiperTV();
    }
    else
    {
        this.swiperDesktop();
    }
  }

  ngOnInit() 
  {
    this.swiperInit(); 
    /*if(window.matchMedia("(max-width: 1599px)").matches)
    {
        var swipercontainer = Array.from(document.getElementsByClassName("billboard swiper-container") as HTMLCollectionOf<HTMLElement>);
        swipercontainer.forEach((element) => {
            element.style.height = ""+window.innerWidth * 0.2+"px";
        });
    }*/
  }

}
