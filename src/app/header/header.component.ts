import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menIicon:string=""
  X:string="menIicon"
  showX(){

    if(this.menIicon==""){
      this.menIicon="menIicon"
      this.X=""
    }else{
      this.menIicon=""
      this.X="menIicon"
  
    }
 


  }



   displayOn:string="displayOn"
  displayOff:string="displayOff"
  

  constructor(    private breakpointObserver: BreakpointObserver) { 
      this.breakpointObserver.observe([
        "(max-width: 768px)"
      ]).subscribe((result: BreakpointState) => {
        if (result.matches) {
            
                this.displayOff=""
                this.displayOn="displayOff"
               
        } else {
          this.displayOff="displayOff"
          this.displayOn=""

        }
    })
  }
  ngOnInit(): void {
  }

}
