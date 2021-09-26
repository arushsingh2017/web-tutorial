import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../bookservice.service';
import {book} from '../../bookclass';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  books$: book[];
  constructor(private _bookservice:BookserviceService) { }
  
  ngOnInit(): void {
    this._bookservice.getuser().subscribe(
      data=>this.books$= data
      )
  }

}
