import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  employees=[
    {id:1,name:'Chandan Kumar'},
    {id:2,name:'Ajeet Kumar'},
    {id:3,name:'Mohan Kumar'},
    {id:4,name:'Sohan Kumar'},
    {id:5,name:'Rahul Kumar'},
    {id:6,name:'Soni Kumari'},
    {id:7,name:'Mohit Kumar'},
    {id:8,name:'Rohit Kumar'},

  ];
  ngOnInit(): void {
  }

}
