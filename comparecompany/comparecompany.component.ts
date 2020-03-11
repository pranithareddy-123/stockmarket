
import { Component, OnInit,ViewChild,

  ElementRef,
 
  AfterViewInit,
 
  OnDestroy,
 
  ChangeDetectorRef, } from '@angular/core';
 
import { ManagecompanyService } from '../managecompany.service';
import { StockpriceService } from '../stockprice.service';
 import { Router } from '@angular/router';
 import { Managecompany } from '../managecompany';
 import { Observable } from 'rxjs/internal/Observable';
 import { Stockprice } from 'src/app/stockprice';
 import { SectorService } from '../sector.service';
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 import { Sector } from 'src/app/sector';
 import { of } from 'rxjs';
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts-service.service';
 
 @Component({
  selector: 'app-comparecompany',
 templateUrl: './comparecompany.component.html',
 styleUrls: ['./comparecompany.component.css']
 })
 
 export class ComparecompanyComponent implements OnInit {
 @ViewChild('charts') public chartEl: ElementRef;
 myGroup: FormGroup;
 constructor(private hcs: HighchartsService,private formBuilder: FormBuilder,private router:Router,private managecompanyservice:ManagecompanyService,private sectorservice:SectorService,private stockpriceservice:StockpriceService) { }
 companydata: Managecompany[];
 companydataAll: Managecompany[];
 sectorList: Sector[];
 stockpricelist: Observable<Stockprice[]>;
 ngOnInit() {
 this.hcs.createChart(this.chartEl.nativeElement);
 this.myGroup= this.formBuilder.group({
 "choose": new FormControl([ Validators.required ]),
 
    "sectorName": new FormControl([ Validators.required ]),
 
    "companyName": new FormControl([ Validators.required ]),
 
    "fromdate":new FormControl([ Validators.required ]),
 
    "todate":new FormControl([ Validators.required ])
 
    })
 
   this.managecompanyservice.getAllCompany().subscribe(data => {
 
    this.companydata = data;
 
    this.companydataAll=data;
 
    this.companydata=this.companydata.filter(comp=>comp.sector == 'NSE') ;
 
    })
 
    this.stockpriceservice.getAllStockprice().subscribe(data => {
 
    this.stockpricelist = data;
 
    })
 
    this.sectorservice.getAllSectordata().subscribe(data => {
 
     this.sectorList = data;
 
     })
 
}
 
  sectorChange()
{
 alert(1234);
  var sectorValue=this.myGroup.controls['sectorName'].value;
  this.companydata=this.companydataAll.filter(comp=>comp.sector == sectorValue) ;
  }
 
 }