import { Component, ViewChild, Renderer2, OnInit, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Observable, Subscription } from "rxjs";
import Swiper from 'swiper';
/*import { Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';*/
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

    mySwiper;
    faPlayCircle = faPlayCircle;

    constructor(private rd: Renderer2) { }

    mobileSwiper(){
        this.mySwiper = new Swiper('.home.swiper-container',
        {
            /*breakpoints: {
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
            },*/
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true,
            observer: true,
            observeParents: true,
        });
    }
    tabletSwiper(){
        this.mySwiper = new Swiper('.home.swiper-container',
        {
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 10,
                freeMode: true,
                observer: true,
                observeParents: true,
        });
    }
    desktopMonitorSwiper(){
        this.mySwiper = new Swiper('.home.swiper-container', {
            direction: 'vertical',
            slidesPerView: 1,
            slidesPerColumn: 3,
            spaceBetween: 10,
            simulateTouch:false,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets:true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    tvSwiper(){
        this.mySwiper = new Swiper('.home.swiper-container',
            {
                direction: 'horizontal',
                slidesPerView: 5,
                slidesPerGroup: 5,
                simulateTouch:false,
                spaceBetween: 10,
                loop: true,
                loopFillGroupWithBlank: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
    }
    swiperInit(){
        /*Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);*/
        if (window.matchMedia("(max-width: 1023px)").matches) 
        {      
            this.mobileSwiper();
        }
        else if (window.matchMedia("(min-width: 1024px) and (max-width: 1439px) and (orientation: portrait)").matches) 
        {  
            this.tabletSwiper();
        }
        else if (window.matchMedia("(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)").matches)
        {         
            this.desktopMonitorSwiper();
        }
        else if (window.matchMedia("(min-width: 2201px)").matches)
        {     
            this.tvSwiper();
        };
    }

    portraitColumn()
    {
        let column = document.getElementsByClassName("column ");
        let columnThird = document.getElementsByClassName("column third");

        if (window.matchMedia("(max-width: 1439px)").matches)
        {
            for (let i = 0; i < column.length; i++)
            {
                column[i].className = column[i].className.replace("column", "column is-full");
            }
        }
        else if(window.matchMedia("(min-width: 1440px) and (max-width: 2200px)").matches)
        {
            for (let i = 0; i < column.length; i++)
            {
                column[i].className = column[i].className.replace("column", "column is-half");
            }
        }
        else if(window.matchMedia("(min-width: 2201px)").matches)
        {
            for (let i = 0; i < columnThird.length; i++) {
                columnThird[i].className = columnThird[i].className.replace(" third", " is-one-fifths ");
            }
            for (let i = 0; i < column.length; i++) {
                column[i].className = column[i].className.replace(" ", "  is-two-fifths ");
            }
        }
    }

    landscapeColumn()
    {
        let column = document.getElementsByClassName("column ");
        let columnThird = document.getElementsByClassName("column third");
        let isFull = document.getElementsByClassName(" is-full");
        let isHalf = document.getElementsByClassName(" is-half");
        let isTwo = document.getElementsByClassName(" is-full");

        if (window.matchMedia("(max-width: 1023px)").matches)
        {
            /*for (let i = 0; i < column.length; i++)
            {
                isHalf[i].className = isHalf[i].className.replace("is-half", "");
            }*/
            for (let i = 0; i < column.length; i++)
            {
                column[i].className = column[i].className.replace("column", "column is-full");
            }
        }
        else if(window.matchMedia("(min-width: 1024px) and (max-width: 2200px)").matches)
        {
            /*for (let i = 0; i < column.length; i++)
            {
                isFull[i].className = isFull[i].className.replace("is-full", "");
            }*/
            for (let i = 0; i < column.length; i++)
            {
                column[i].className = column[i].className.replace("column", "column is-half");
            }
        }
        else if(window.matchMedia("(min-width: 2201px)").matches)
        {
            for (let i = 0; i < columnThird.length; i++) {
                columnThird[i].className = columnThird[i].className.replace(" third", " is-one-fifths ");
            }
            for (let i = 0; i < column.length; i++) {
                column[i].className = column[i].className.replace(" ", "  is-two-fifths ");
            }
        }
    }

    setSwiperContainerHeight()
    {
        if(window.matchMedia("(min-width: 1024px) and (max-width: 2200px)").matches)
        {
		    var swipercontainer = Array.from(document.getElementsByClassName("home swiper-container") as HTMLCollectionOf<HTMLElement>);
            swipercontainer.forEach((element) => {
                element.style.height = ""+ window.innerWidth * 0.2+"px";
            });
        }
        if(window.matchMedia("(max-width: 1599px)").matches)
        {
            var billboardswipercontainer = Array.from(document.getElementsByClassName("billboard swiper-container") as HTMLCollectionOf<HTMLElement>);
            billboardswipercontainer.forEach((element) => {
                element.style.height = ""+window.innerWidth * 0.2+"px";
            });
        }
    }

    ngOnInit() 
    {
        this.swiperInit();
        /*if (window.matchMedia("(orientation: portrait)").matches)
        {
            this.portraitColumn();
        }
        if (window.matchMedia("(orientation: landscape)").matches)
        {
            this.landscapeColumn();
        }*/
    }

    @HostListener('window:resize', ['$event'])
    initSwiperOnResize(event)
    {
        this.swiperInit();
        this.setSwiperContainerHeight();
    }
    ngAfterViewInit(){	
        this.setSwiperContainerHeight();
        let swipercontainer = <HTMLElement>document.querySelector('.swiper-container');
        swipercontainer.style.background ='black';
    } 
    ngOnDestroy() {
    //this.resizeSubscription$.unsubscribe()
    }
}
