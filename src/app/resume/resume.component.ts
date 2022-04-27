import { Component, Input, OnInit } from '@angular/core';
import { education } from '../shared/models/education';
import { work } from '../shared/models/work';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
 educations:education[]=[]
 works:work[]=[]
  constructor() { }

  ngOnInit(): void {
    let ed1:education= new education();
    ed1.city="Sousse,Tunisia"
    ed1.college="Higher institute of appleid science and technology of Sousse"
    ed1.details="3 YEARS OF SOFTWARE ENGINEERING CLASS" 
    ed1.field="software engineering"
    ed1.date="2019-2022"
    this.educations.push(ed1)
    let ed2:education= new education();
    ed2.city="Sousse,Tunisia"
    ed2.college="Higher institute of appleid science and technology of Sousse"
    ed2.details="2 YEARS OF  PRE-ENGINEERING CLASS (Praretory)" 
    ed2.field="PRE-ENGINEERING CLASS (Praretory)"
    ed2.date="2017-2019"
    this.educations.push(ed2)

    let ed3:education= new education();
    ed3.city="Sousse,Tunisia"
    ed3.college="Ahmed Nour Eddin High School"
    ed3.details="High school diploma with 15.20/20" 
    ed3.field="Computer Science"
    ed3.date="2017"
    this.educations.push(ed3)


    let w1:work = new work();
    w1.city="Sousse, Tunisia"
    w1.company="DOT-IT"
    w1.date =" July 2021 -September 2021"
    w1.position="Full stack web developer intern"
    w1.details="Architecting and developing an e-commerce web application"
    this.works.push(w1)
    
    let w2:work = new work();
    w2.city="Sousse, Tunisia"
    w2.company="Freelance"
    w2.date =" April 2021 - May 2021"
    w2.position="Full stack web developer"
    w2.details="Aid Tunisian people on the covid pandemic by developing a website that helps people finding oxygen concentrators or putting them for rent/free"
    this.works.push(w2)

    
    let w3:work = new work();
    w3.city="Sousse, Tunisia"
    w3.company="Freelance"
    w3.date =" April 2021 - May 2021"
    w3.position="Full stack web developer"
    w3.details="Development of a website that provides 3D navigation for physical places such as apartments for rent or sale, coffees ... "
    this.works.push(w3)

    let w4:work = new work();
    w4.city="Sousse, Tunisia"
    w4.company="GENEXT-IT"
    w4.date =" July 2020 -September 2020"
    w4.position="Full stack web developer"
    w4.details="Developing a web platform in which French citizens practice democracy by making political decisions with voting, debate, polling, and local election"
    this.works.push(w4)
    
  }
  

}
