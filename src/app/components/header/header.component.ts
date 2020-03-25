import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _ref:any;   

  constructor() { }

  openHome()
  {
    var x = document.getElementsByClassName("active-link");
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("active-link", "");
    }
    document.getElementById("home").className += (" active-link");
  }

  openPage(event) 
  {
    var x = document.getElementsByClassName("active-link");
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("active-link", "");
    }
    event.target.className += " active-link";
  }

  destroyBillboard(){
    /*this._ref.destroy();*/
  }   
  
  changeNavbar()
  {
    if($(window).width() >= 1024 && $(window).width() < 2201)
      {
          $("#nav-moving").addClass(" is-fixed-top");
          $(window).scroll(function() 
          {
              if($(this).scrollTop() > 50) // checks if window is scrolled more than 50px, adds/removes solid class
              { 
                document.getElementById("nav-moving").style.backgroundColor = "rgb(20, 20, 20)";
              }
              else
              {
                document.getElementById("nav-moving").style.backgroundColor = "transparent";
              }
          });
      }
      if($(window).width() < 1024 || $(window).width() >= 2201)
      {
          $(window).scroll(function() 
          {
              if($(this).scrollTop() > 55) // checks if window is scrolled more than 50px, adds/removes solid class
              { 
                document.getElementById("nav-moving").style.backgroundColor = "rgb(20, 20, 20)";
                $("#nav-moving").addClass(" is-fixed-top");
              }
              else
              {
                document.getElementById("nav-moving").style.backgroundColor = "rgb(20, 20, 20)";
                $("#nav-moving").removeClass(" is-fixed-top");
              }
          });
      } 
  }

  closeNavbarMenu()
  {
    $(".removeclick").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".has-dropdown1").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
    $(".navbar-item.item").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".has-dropdown1").removeClass("is-active");
        $(".has-dropdown1").removeClass("is-hoverable");
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        setTimeout(function()
        { 
          $(".has-dropdown1").addClass("is-hoverable"); 
        }, 500);
    });
  }

  toggleNavbarMenu()
  {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
  }

  toggleDropDown()
  {
    // Check for click events on the navbar burger icon
    $(".has-dropdown1 .navbar-link").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".has-dropdown1").toggleClass("is-active");
    });
  }

  ngOnInit() 
  {
    $(document).ready(function() 
    {     
      this.changeNavbar();
      this.closeNavbarMenu();
      this.toggleNavbarMenu();
      this.toggleDropDown();
    })
  }
}
