import { Component, OnInit } from '@angular/core';
import { projects } from '../shared/models/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: projects[]=[]
  constructor() { }

  ngOnInit(): void {
    let p1: projects = new projects();
    p1.title = "Oxygeni";
    p1.details = "Aid Tunisian people on the covid pandemic by developing a website that helps people finding oxygen concentrators or putting them for rent/free."
    p1.imgUrl = "r";
    p1.position = "Full stack developer";
    this.projects.push(p1);

    let p2: projects = new projects();
    p2.title = "Decidemos";
    p2.details="Developing a web platform in which French citizens practice democracy by making political decisions with voting, debate, polling, and local elections"
    p2.imgUrl = "r";
    p2.position = "Full stack developer";
    this.projects.push(p2);

    let p3: projects = new projects();
    p3.title = "InstaVisit";
    p3.details="Development of a website that provides 3D navigation for physical places such as apartments for rent or sale, coffees ..."
    p3.imgUrl = "r";
    p3.position = "Full stack developer";
    this.projects.push(p3);

    let p4: projects = new projects();
    p4.title = "Sportify";
    p4.details="Development of the frontend of the web application  that provides the nearest sports events and coaches (all types of sports) consuming Decathlon service"
    p4.imgUrl = "r";
    p4.position = "Full stack developer";
    this.projects.push(p4);

    let p5: projects = new projects();
    p5.title = "Tunizon";
    p5.details="An e-commerce web application (amazon clone)  "
    p5.imgUrl = "r";
    p5.position = "Full stack developer";
    this.projects.push(p5);

    let p6: projects = new projects();
    p6.title = "Mercake";
    p6.details="Developing the front-end of a pastry store"
    p6.imgUrl = "r";
    p6.position = "Full stack developer";
    this.projects.push(p6);

    let p7: projects = new projects();
    p7.title = "Scoreboard";
    p7.details="Building a scoreboard with a stopwatch"
    p7.imgUrl = "r";
    p7.position = "Full stack developer";
    this.projects.push(p7);


    let p8: projects = new projects();
    p8.title = "Servers Manager";
    p8.details="An application for managing different server"
    p8.imgUrl = "r";
    p8.position = "Front end developer";
    this.projects.push(p8);

    let p9: projects = new projects();
    p9.title = "EGovnez";
    p9.details="E-procurement system"
    p9.imgUrl = "r";
    p9.position = "Full stack developer";
    this.projects.unshift(p9);
  }

}
