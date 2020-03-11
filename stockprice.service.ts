import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl = 'http://localhost:8081/stockprice/stockprice/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllStockprice(): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'getAllStockprice');  
  }  
  
  SaveStockprice(stockprice: object): Observable<object> {  
    return this.http.post<Stockprice>(this.baseUrl+'saveStockprice', stockprice);  
  }  
  
  deleteStockprice(companyCode:number):Observable<any>{
    return this.http.delete<Stockprice>(this.baseUrl+'deleteStockprice/'+companyCode);
    }
  
  find1(companyCode: number): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'find1/'+companyCode);  
  }  
  
  updateStockprice(companyCode: number, value: any): Observable<any> {  
    return this.http.post<Stockprice>(this.baseUrl+'updateStockprice/'+companyCode, value);  
  }  
    
}  