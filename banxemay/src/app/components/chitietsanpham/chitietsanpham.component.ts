import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Xemay } from 'src/app/models/xemay.model';
import { ProductService } from 'src/app/services/product.service';
import { XemayService } from 'src/app/services/xemay.service';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent implements OnInit {

  product = new Product;
  xemay = new Xemay;
  constructor(private route:ActivatedRoute, private productService:ProductService, private xemayService:XemayService) { }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['maMH']);
    this.getRouteProXemay(this.route.snapshot.params['maMH']);
  }
  getRoutePro(maMH:any)
  {
    this.productService.searchProduct(maMH).subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }
  getRouteProXemay(maMH:any)
  {
    this.xemayService.searchXemay(maMH).subscribe((data:any)=>{
      console.log(data);
      this.xemay = data;
    })
  }
}
