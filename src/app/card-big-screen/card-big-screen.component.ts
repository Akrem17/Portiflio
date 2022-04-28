import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-card-big-screen',
  templateUrl: './card-big-screen.component.html',
  styleUrls: ['./card-big-screen.component.scss']
})
export class CardBigScreenComponent implements OnInit {
  myClass:string ="center";
  wrapper:string ="wrapper";
  displayOn:string="displayOn"
  displayOff:string="displayOff"
  
  innerWidth: number | undefined;

  constructor(    private breakpointObserver: BreakpointObserver) { 
      this.breakpointObserver.observe([
        "(max-width: 768px)"
      ]).subscribe((result: BreakpointState) => {
        if (result.matches) {
            
                this.displayOff=""
                this.displayOn="displayOff"
                console.log("hilo")
               
        } else {
          this.displayOff="displayOff"
          this.displayOn=""

          console.log("hvbbilo")
        }
    })
  }

  ngOnInit(): void {
      
  }
}

