import { Component, OnInit, Pipe,PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser'
import { throwError, from } from 'rxjs';
import {obj} from './Data'
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  title = 'Welcome to W2W';
  data:any;
  public dataValue: obj[];
  public expire: obj[];

  private isDataAvailable:boolean=false;

  constructor(private http: HttpClient,private messageService: MessageService)
  { 
    console.log("Hi");
    let headers = new HttpHeaders().set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com');
    headers = headers.set('x-rapidapi-key', '2e75f12489msh4881df0eea4530ap1d9974jsnb1c9075c37c4');
    headers.append('Content-Type', 'application/json');
    this.http.get<any>("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3ADE&p=1&t=ns&st=adv",{ headers: headers}).
    subscribe(data => {this.dataValue = data;console.log(this.dataValue);});
    /*this.http.get("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3ADE&p=1&t=ns&st=adv",{ headers: headers}).
    pipe(map((data: any) => data.result), catchError(error => {
    return throwError('Its a Trap!')})).subscribe(data => {this.dataValue = data;console.log(this.dataValue)});*/      
    this.http.get<any>("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3ADE&t=ns&st=adv&p=1",{ headers: headers}).
    subscribe(data => {this.expire = data;console.log(this.expire);});
    
  }
}