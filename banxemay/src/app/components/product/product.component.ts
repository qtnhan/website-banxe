import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datas:Product[] = [];
  public maMH1 = '';
  constructor(private prod:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.prod.getAllProduct().subscribe((data:any) => {
      this.datas = data;
    })
  }
}
