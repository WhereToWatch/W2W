import { Component, OnInit, AfterViewInit, /*HostListener, ElementRef , ViewChild, Renderer2*/ } from '@angular/core';
import Swiper from 'swiper';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
/*import { Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';
import { fromEvent, Observable, Subscription } from "rxjs";*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

    mySwiper;//Die Variable, die die Swiper bindet 
    faPlayCircle = faPlayCircle; //Die Bennungn der Variable, die das Play-Icon binden soll
    //Beide Variablen sind für OneWay-Databinding da

    constructor(/*private rd: Renderer2*/) { }

    mobileTabletSwiper(){
        //Holt sich alle Swiper von allen Komponenten, die die CSS-Klasse enthalten und bestimmt deren Eigenschaften mit dem Objekt. (Alle Swiper von den Streaming Services)
        return new Swiper('.home.swiper-container',
        {
            /*breakpoints: {
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
            },*/
            direction: 'horizontal', //bestimmt die Richtung in der sich die Swiper bewegen sollen
            slidesPerView: 'auto', //Die Anzahl der Slides, die Angezeigt werden sollen, bei auto werden diese durch die Breite in CSS bestimmt
            spaceBetween: 10, //Abstand zwischen den Slides: 10px
            freeMode: true, //keine Zentrierung oder Gruppierung der Slides beim Durchschauen
            observer: true, //Erkennt Veränderungen im Style und reinitialisiert den Swiepr
            observeParents: true, //Erkennt Veränderungen in Elementen, die den Swiper enthalten
        });
    }
    /*tabletSwiper(){
        this.mySwiper = new Swiper('.home.swiper-container',
        {
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 10,
                freeMode: true,
                observer: true,
                observeParents: true,
        });
    }*/
    desktopMonitorSwiper(){
        return new Swiper('.home.swiper-container', {
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
        return new Swiper('.home.swiper-container',
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
        ///<summary> Wenn das Fenster kleiner als 1024, dann übergebe den Handy/tablet-Swiper </summary>
        if (window.matchMedia("(max-width: 1023px)").matches)  
        {      
            this.mySwiper = this.mobileTabletSwiper();//deklariert und initialisiert die Variable. In JS/TS können Methode/Funktionen/Prozeduren Variablen zugewiesen werden, da in JS diese auch nur Objekte sind.
        }
        ///<summary> Wenn die Fensterbreite zwischen 1023px und 1440px liegt und vertikal ist, dann übergebe den Handy/tablet-Swiper </summary>
        else if (window.matchMedia("(min-width: 1024px) and (max-width: 1439px) and (orientation: portrait)").matches) 
        {  
            this.mySwiper = this.mobileTabletSwiper();
        }
        ///<summary> Wenn die Fensterbreite zwischen 1023px und 2201px liegt und horizontal ist, dann übergebe den Desktop-Swiper </summary>
        else if (window.matchMedia("(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)").matches)
        {         
            this.mySwiper = this.desktopMonitorSwiper();
        }
        ///<summary> Wenn die Fensterbreite breiter als 2200px ist, dann übergebe den TV-Swiper </summary>
        else if (window.matchMedia("(min-width: 2201px)").matches)
        {     
            this.mySwiper = this.tvSwiper();
        }
        ///<summary> In allen anderen Fällen übergebe den Desktop-Swiper</summary>
        else
        {
            this.mySwiper = this.desktopMonitorSwiper();
        }
    }

    setSwiperContainerHeight()
    {
        if(window.matchMedia("(min-width: 1024px) and (max-width: 2200px)").matches)//Wenn die Fensterbreite zwischen 1023px und 2201px liegt, dann bearbeite was kommt 
        {
            ///<summary> Holt sich alle Elmente mit der Klassenliste "home swiper-container" und macht daraus ein Array und weist es zu. Die For-Each weist jedem Element im Array die Höhe abhängig von der Breite des Fensters</summary>
		    var swipercontainer = Array.from(document.getElementsByClassName("home swiper-container") as HTMLCollectionOf<HTMLElement>);
            swipercontainer.forEach((element) => {
                element.style.height = ""+ window.innerWidth * 0.2+"px";
            });
        }
        if(window.matchMedia("(max-width: 1599px)").matches)//Wenn die Fensterbreite kleiner als 1600px liegt, dann bearbeite was kommt 
        {
            ///<summary> Holt sich alle Elmente mit der Klassenliste "billboard swiper-container" und macht daraus ein Array und weist es zu. Die For-Each weist jedem Element im Array die Höhe abhängig von der Breite des Fensters</summary>
            var billboardswipercontainer = Array.from(document.getElementsByClassName("billboard swiper-container") as HTMLCollectionOf<HTMLElement>);
            billboardswipercontainer.forEach((element) => {
                element.style.height = ""+window.innerWidth * 0.2+"px";
            });
        }
    }

    ngOnInit() 
    {
        this.swiperInit();//initialisiert alle Swiper mit der CSS-Klasse "home swiper-container"
    }

    initSwiperOnResize(event)
    {
        ///<summary> initialisiert alle Home-Swiper bei Änderung der Browsergröße neu und bestimmt auch deren Höhe von neuem</summary>
        this.swiperInit();
        this.setSwiperContainerHeight();
        /*this.mySwiper.destroy(true,true);
        this.mySwiper = this.swiperInit();*/
    }

    ngAfterViewInit()
    {	
        this.setSwiperContainerHeight(); //Setzte die Höhe der Swiper, abhängig von der Fensterbreite, fest
        let swipercontainer = <HTMLElement>document.querySelector('.billboard.swiper-container'); //Holt sich das erste Element mit der CSS-Klasse und weist es einer Variable zu
        swipercontainer.style.background ='black'; //Setzt die Hintergrundfarbe des Elements, welches der Variable zugewiesen wurde, auf Schwarz
    } 
    /*ngOnDestroy() {
    //this.resizeSubscription$.unsubscribe()
    }*/
}
