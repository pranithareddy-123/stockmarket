package com.cts.stockprice.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="stockprice")
public class StockPrice {
	
	@Id
Integer companyCode;
	
String stockExchange;
String currentPrice;
String opendatetime;

@Override
public String toString() {
	return "StockPrice [ companyCode=" + companyCode + ", stockExchange=" + stockExchange
			+ ", currentPrice=" + currentPrice + ", opendatetime=" + opendatetime + "]";
}
public Integer getCompanyCode() {
	return companyCode;
}
public void setCompanyCode(Integer companyCode) {
	this.companyCode = companyCode;
}
public String getStockExchange() {
	return stockExchange;
}
public void setStockExchange(String stockExchange) {
	this.stockExchange = stockExchange;
}
public String getCurrentPrice() {
	return currentPrice;
}
public void setCurrentPrice(String currentPrice) {
	this.currentPrice = currentPrice;
}
public String getOpendatetime() {
	return opendatetime;
}
public void setOpendatetime(String opendatetime) {
	this.opendatetime = opendatetime;
}
}
