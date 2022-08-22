import { LocationService } from './../services/location.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { EpidemiologyReportComponent } from './components/epidemiology-report/epidemiology-report.component';
import { ReportYourPathComponent } from './components/report-your-path/report-your-path.component';



@NgModule({
  declarations: [    ReportYourPathComponent,
    EpidemiologyReportComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers:[LocationService]
})
export class ReportsModule { }
