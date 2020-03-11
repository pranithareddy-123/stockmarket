package com.cts.stockprice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.stockprice.dao.StockPriceRepository;
import com.cts.stockprice.pojos.StockPrice;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/stockprice")
public class StockPriceController {
@Autowired
 private StockPriceRepository stockPriceRepository;
@GetMapping("/getAllStockprice")
 public Iterable<StockPrice> getAllstockprice()
{ return stockPriceRepository.findAll();
 }
@PostMapping("/saveStockprice")
public StockPrice saveStockprice(@RequestBody StockPrice stockprice)
{
	System.out.println(stockprice);
stockPriceRepository.save(stockprice);
return stockprice;
}
@PutMapping("/updateStockprice/{companycode}")
public StockPrice updateStockPrice(@RequestBody StockPrice stockprice, @PathVariable("companycode")Integer companycode)

{
 stockprice.setCompanyCode(companycode);
System.out.println(stockprice);
stockPriceRepository.save(stockprice);
return stockprice;
}
@DeleteMapping("/deleteStockprice/{companyCode}")
public boolean deleteStockprice( @PathVariable("companyCode") Integer id)

{
	
	stockPriceRepository.deleteById(id);
return true;
}

@GetMapping("/find1/{companyCode}")

public StockPrice find1( @PathVariable("companyCode")Integer id)
{
Optional<StockPrice> stockprice=stockPriceRepository.findById(id);
return stockprice.get();
}


}






