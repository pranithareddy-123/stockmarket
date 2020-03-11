import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  constructor(private stockpriceservice: StockpriceService,private router:Router) { }
 stockpricelist: Observable<any[]>;
 ngOnInit() {
 this.stockpriceservice.getAllStockprice().subscribe(data => {
 this.stockpricelist = data;
 })
 
  }

deleteStockprice(stockprice:Stockprice){
  this.stockpriceservice.deleteStockprice(stockprice.companyCode).subscribe(data=>{
 this.stockpriceservice.getAllStockprice().subscribe(data=>{this.stockpricelist=data;});
  });
}
updateStockprice(stockprice : Stockprice ) {
  window.localStorage.removeItem("edit-companyCode");
   window.localStorage.setItem("edit-companyCode", stockprice.companyCode.toString());
   this.router.navigate(['stockprice']);
   }


}
  