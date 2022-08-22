import { LocationService } from './../../../services/location.service';
import { Location } from 'src/app/models/Location';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epidemiology-report',
  templateUrl: './epidemiology-report.component.html',
  styleUrls: ['./epidemiology-report.component.scss']
})
export class EpidemiologyReportComponent implements OnInit {

  locationsList!:Location [];
  constructor(private _location:LocationService, private _router : Router) { }

  ngOnInit(): void {
this._location.getAllLocation().subscribe(data=>{
  this.locationsList=data;
})
  }
  nextPage()
  {
    this._router.navigate(['report-your-path']);

  }

}
