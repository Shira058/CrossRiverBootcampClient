import { AppComponent } from "./app.component";
import { EpidemiologyReportComponent } from "./reports/components/epidemiology-report/epidemiology-report.component";
import { ReportYourPathComponent } from "./reports/components/report-your-path/report-your-path.component";
import { ReportsModule } from "./reports/reports.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {    path: "", component:ReportYourPathComponent},
  {    path: "report-your-path", component:ReportYourPathComponent},
  {    path: "epidemiology-report", component:EpidemiologyReportComponent},
  {    path: "**", component:NotFoundPageComponent}]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
   ReportsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { 
 }
