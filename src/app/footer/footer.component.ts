import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


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
