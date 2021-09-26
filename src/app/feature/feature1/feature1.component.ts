import { Component, OnInit } from '@angular/core';
import{ServiceFeatureService} from '../../service-feature.service';
import{FeatureClass} from '../../feature-class';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {
  homefeature$: FeatureClass[];
  constructor(private _featureservice: ServiceFeatureService) { }

  ngOnInit(): void {
    //this._featureservice.apiurl_comment.sub
    this._featureservice.getfeaturedata().subscribe(
      data=>this.homefeature$= data
      )
  }

}
