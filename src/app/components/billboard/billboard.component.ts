import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

/*import { Swiper, Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';
*/
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
        speed: 600, //Die Geschwindigkeit mit der gewchselt wird 
        effect: 'fade', //Beim Wechseln desd Bildes soll ein Effekt auftreten, der das Bild verschwinden lässt
        grabCursor: true, //Bei Geräten mit einer Maus soll eine Hand zum Wechseln auftauchen
        parallax: true, //Der Text bekommt auch einen Effekt
        loop:true, //nach dem letzten Bild fängt er von neuem an
        pagination: { //Zeigt die Anzahl der Bilder als Punkte an 
            el: '.swiper-pagination', //die Klasse in der es angezeigt werden soll
            clickable: true, //Erlaubt es durch das Drücken auf den Punkten das jewilige Bild auszuwählen und anzuzeigen 
        },
        autoplay:{ //Aktiviert das automatische Wechseln der Bilder 
            delay: 5000, //Die Dauer in der das Bild angezeigt werden soll
            disableOnInteraction: false, //Soll immmer aktiv sein, selbst wenn der Benutzer weiterklickt 
        }
    });
  }

  swiperDesktop()
  {
    this.startSwiper = new Swiper('.billboard.swiper-container', {
        speed: 600,
        autoHeight: true, //Die Höhe soll sich automatisch anpassen
        simulateTouch:false, //Erlaubt das Wechseln nur über die Knöpfe bzw. den Punkten 
        effect: 'fade',
        parallax: true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //Fügt eine Navigation durch Pfeile
            nextEl: '.swiper-button-next', //Das Element das als Knopf zum vorspringen dient
            prevEl: '.swiper-button-prev', //Das Element das als Knopf zum zurückgehen dient
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
    /*Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);*/
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

  ngOnInit() //Eine Funktion von Angular, die immer aufgerüfen wird wenn die Komponente aufgerufen wird
  {
    this.swiperInit(); //Aufruf der Funktion zum Aktivieren
    /*if(window.matchMedia("(max-width: 1599px)").matches)
    {
        var swipercontainer = Array.from(document.getElementsByClassName("billboard swiper-container") as HTMLCollectionOf<HTMLElement>);
        swipercontainer.forEach((element) => {
            element.style.height = ""+window.innerWidth * 0.2+"px";
        });
    }*/
  }

}
