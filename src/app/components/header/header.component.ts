import 
//ES5-Syntax um Funktionen und Objekte zu importieren die in einem externen Modul, einem anderen Script etc. enthalten sind. Diese Funktion wird jedoch nicht von allen Browsern unterstützt, daher arbeitet Angular mit Babel, ein JS Compiler/Transpiler(übersetzt neue Syntax in ältere um) im Hintergrund, um auch ältere Browser zu unterstützen.
{ 
  Component,   /*Ein Dekorator der Angular informiert, dass eine Klasse einer Komponente angehört und wie diese in verschidenen Phasen fungieren soll.
  Komponenten sind die einfachsten UI Baublöcke von Angular. Angular besteht aus einem "Baum" von Komponenten.
  Sie sind eine Untergruppe von Direktiven und können im Gegensatz zu Direktiven nur einmal im Zusammenhang mit einem Template benutzt werden. Eine Komponente muss immer einem NgModule angehören um in einer Komponente zu existieren.
  Alle Komponenten exisitieren in der App-Komponente und können dadurch in einander existieren.
  Komponenten können mit LifecycleHooks kontrolliert werden.
  */
   OnInit 
   //Ein lifecycle hook (= existiert mit der Komponente), welches von Angular aufgerufen wird, wenn eine Komponente nach Einbau von Directiven ,falls welche vorhanden sind, die in der Methode kommenden Funktionen, Variablen, etc. aufruft bzw. initialisiert. Wird nur beim Aufruf der Komponente ausgeführt.

} 
from '@angular/core'; 
//Das Zentrale Modul das von Angular zur verfügung gestellt wird. 
//Der Name des Moduls aus welchem es extrahiert werden soll

import * // importiert das gesamte Modul
 as $ //Das Zeichen mit dem das Modul aufgerufen wird 
 from 'jquery'; //Eine Library die zu Anfagszeiten von komlexen Web-Applikationenen entwickelt wurde, da JavaScript noch nicht wie heute ausgereift war. Es war viel schwerer und hat viel länger gedauert eine komplexe Web-App mit JS zu entwickeln  

 //Beide Syntax rufen das gesamte Modul auf, doch bei der ersten Syntax sagt man genau was man will und der "Garbage-Collector" kann einfacher arbeiten.

//So wird eine Komponente instanziert/initialisiert
@Component({  
  selector: 'app-header', //Der Selektor ist dient als HTML-Tag 
  templateUrl: './header.component.html', //Die dazugehörige HTML-Datei
  styleUrls: ['./header.component.css'] //Die dazugehörige CSS-Datei
})
export class HeaderComponent implements OnInit {
  /*_ref:any;*/   

  constructor() { }// Der Konstruktor ist eine spezielle Methode zum Erzeugen und initialisieren eines Objekts innerhalb einer Klasse. Wenn man keinen Konstruktor einbaut, wird er trotzdem als leere Funktion automatisch erzeugt.Er wird als aller erstes beim Aufruf einer Klasse abgefragt, daurch können Funktionen wie API-Aufrufe sofort initialiert werden.
  
  openHome()
  {
    //Alle Elemente, die die CSS-Klasse "active-link" enthalten holen
    var x = document.getElementsByClassName("active-link");
    //Die Schleife soll die CSS-Klasse entfernen 
    for (var i = 0; i < x.length; i++) 
    {
      x[i].className = x[i].className.replace("active-link", "");
    }
    //Der ID wird die CSS-Klasse "active-link" hinzugefügt
    document.getElementById("home").className += (" active-link");
  }

  openPage(event) 
  {
    //Alle Elemente, die die CSS-Klasse "active-link" enthalten holen
    var x = document.getElementsByClassName("active-link");
    //Die Schleife soll die CSS-Klasse entfernen 
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("active-link", "");
    }
    //Das Element das angeklickt wurde bekommt die CSS-Klasse "active-link" hinzugefügt
    event.target.className += " active-link";
  }

  destroyBillboard(){
    /*this._ref.destroy();*/
  }   
  
  changeNavbar()
  {
    $(document).ready(function()//Jquery Syntax, um Jquery nutzen zu können 
    {  
      if($(window).width() >= 1024 && $(window).width() < 2201)// wenn das Browser-Fenster kleiner zwischen 1023px und 2201px ist, dann werden die folgenden Befehle ausgeführt. 
        {
            $("#nav-moving").addClass(" is-fixed-top"); // Fügt der Navbar die CSS-Klasse hinzu, sodass die position der Navbar absolut ist.
            $(window).scroll(function() 
            {
                if($(this).scrollTop() > 50) //Erkennt wenn über den 50px gescrollt wird
                { 
                  document.getElementById("nav-moving").style.backgroundColor = "black";
                }
                else
                {
                  document.getElementById("nav-moving").style.backgroundColor = "transparent";
                }
            });
        }
        if($(window).width() < 1024 || $(window).width() >= 2201) // wenn das Browser-Fenster größer als 2201px und größer als 1023 ist, dann werden die folgenden Befehle ausgeführt. 
        {
            $(window).scroll(function() 
            {
                if($(this).scrollTop() > 55) //Erkennt wenn über den 55px gescrollt wird
                { 
                  //document.getElementById("nav-moving").style.backgroundColor = "black";
                  $("#nav-moving").addClass(" is-fixed-top"); // Fügt der Navbar die CSS-Klasse hinzu, sodass die position der Navbar absolut ist.
                }
                else
                {
                  document.getElementById("nav-moving").style.backgroundColor = "black";//Die Farbe soll auf schwarz gesetzt werden
                  $("#nav-moving").removeClass(" is-fixed-top");//Beim rauf scrollen zur Anfangsposition soll beim Element mit der jewiligen ID die CSS-Klasse entfernt werden, sodass die position der Navbar relativ wird.
                }
            });
        }
    }) 
  }

  closeNavbarMenu()
  {
    $(document).ready(function() 
    {  
      $(".removeclick").click(function() //Wenn Elemente mit der Klasse oder Elemente in der Klasse angeklickt werden (Liegt über den gesamten Body exklusive Navbar), soll etwas passieren
      {
          //Entfernt von allen angeführten CSS-Klassen die CSS-Klasse "is-active", dadurch werden alle Menüs und Dropdowns geschlossen
          $(".has-dropdown1").removeClass("is-active");
          $(".navbar-burger").removeClass("is-active");
          $(".navbar-menu").removeClass("is-active");
      });
      $(".navbar-item.item").click(function() //Wenn Elemente mit der CSS-Klasse oder Elemente in der CSS-Klasse (Elemente in der Navbar, die kein Dropdown sind) angeklickt werden, soll etwas passieren. 
      {
          //Entfernt von allen angeführten CSS-Klassen die CSS-Klasse "is-active", dadurch werden alle Menüs und Dropdowns geschlossen
          $(".has-dropdown1").removeClass("is-active");
          $(".navbar-burger").removeClass("is-active");
          $(".navbar-menu").removeClass("is-active");
          //Enfernt von der CSS-Klasse Dropdown "is-hoverable",sodass das Menü auch geschlossen wird, wenn ein Item drinnen angeklickt wird.
          $(".has-dropdown1").removeClass("is-hoverable");
          //Soll nach einer halben Sekunde die CSS-Klasse wieder hinzufügen, damit beim rüberfahren über Dropdowns ein Dropdown angezeigt werden kann.
          setTimeout(function()
          { 
            $(".has-dropdown1").addClass("is-hoverable"); 
          }, 500);
      });
    })
  }

  toggleNavbarMenu()
  {
    $(document).ready(function() 
    {  
      // Wartet auf einen Klick auf dem Burger-zeichen in der Handy/Tablet-Version
      $(".navbar-burger").click(function() 
      {
          //Entferne bzw. füge hinzu die CSS-Klasse "is-active" (öffne und schließe das Navbar-Menü)
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
      });
    })
  }

  toggleDropDown()
  {
    $(document).ready(function() 
    {     
      // Wartet auf einen Klick vom Dropdown in der Handy/Tablet-Version
      $(".has-dropdown1 .navbar-link").click(function() 
      {
          //Entferne bzw. füge hinzu die CSS-Klasse "is-active" (öffne und schließe das Dropdown-Menü)
          $(".has-dropdown1").toggleClass("is-active");
      });
    })
  }

  ngOnInit() //Die Methode Callback
  {
    this.changeNavbar();
    this.closeNavbarMenu();
    this.toggleNavbarMenu();
    this.toggleDropDown();
  }
}
