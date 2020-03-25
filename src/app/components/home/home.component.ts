import { Component, ViewChild, Renderer2, OnInit, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Observable, Subscription } from "rxjs";
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

var mySwiper;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

    faPlayCircle = faPlayCircle;

    constructor(private rd: Renderer2) { }

    mobileSwiper(){
        mySwiper = new Swiper('.home.swiper-container',
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
        mySwiper = new Swiper('.home.swiper-container',
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
        mySwiper = new Swiper('.home.swiper-container', {
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
        mySwiper = new Swiper('.home.swiper-container',
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
        Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);

        if (window.matchMedia("(max-width: 1023px)").matches)
        {      
            this.mobileSwiper();
        }
        else if (window.matchMedia("(max-width: 1439px) and (orientation: portrait)").matches) 
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

    ngOnInit() {
        this.swiperInit();
        var i;
        if (window.matchMedia("(orientation: portrait)").matches)
        {
            if($(window).width() < 1024){
                var x = document.getElementsByClassName("column");
                for (i = 0; i < x.length; i++)
                {
                    x[i].className = x[i].className.replace("column", "column is-full");
                }
            }
            else if($(window).width() > 1023 && $(window).width() < 2201)
            {
                var x = document.getElementsByClassName("column");
                for (i = 0; i < x.length; i++)
                {
                    x[i].className = x[i].className.replace("column", "column is-half");
                }
            }
            else if($(window).width() > 2200){
                var s = document.getElementsByClassName("column third")
                for (i = 0; i < s.length; i++) {
                    s[i].className = s[i].className.replace(" third", " is-two-fifths ");
                }
                var x = document.getElementsByClassName("column ")
                for (i = 0; i < x.length; i++) {
                    x[i].className = x[i].className.replace(" ", "  is-two-fifths ");
                }
            }
        }
        if (window.matchMedia("(orientation: landscape)").matches)
        {
            if($(window).width() >= 1024 && $(window).width() < 2201){
                var x = document.getElementsByClassName("column");
                for (i = 0; i < x.length; i++)
                {
                    x[i].className = x[i].className.replace("column", "column is-half");
                }
            }
            else if($(window).width() <= 1023){
                var x = document.getElementsByClassName("column");
                for (i = 0; i < x.length; i++)
                {
                    x[i].className = x[i].className.replace("column", "column is-full");
                }
            }
            else if($(window).width() > 2200){
                var s = document.getElementsByClassName("column third")
                for (i = 0; i < s.length; i++) {
                    s[i].className = s[i].className.replace(" third", " is-two-fifths ");
                }
                var x = document.getElementsByClassName("column ")
                for (i = 0; i < x.length; i++) {
                    x[i].className = x[i].className.replace(" ", "  is-two-fifths ");
                }
            }
        }
    }
    @HostListener('window:resize', ['$event'])
    initSwiperOnResize(event)
    {
        this.swiperInit();
        if($(window).width() >= 1024 && $(window).width() < 2201)
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
    ngAfterViewInit(){	
        if($(window).width() >= 1024 && $(window).width() < 2201)
        {
            var swipercontainer = Array.from(document.getElementsByClassName("home swiper-container") as HTMLCollectionOf<HTMLElement>);
            swipercontainer.forEach((element) => {

                element.style.height = ""+window.innerWidth * 0.2+"px";
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

    ngOnDestroy() {
    //this.resizeSubscription$.unsubscribe()
    }
}
