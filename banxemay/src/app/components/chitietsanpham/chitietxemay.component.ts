import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Xemay } from 'src/app/models/xemay.model';
import { XemayService } from 'src/app/services/xemay.service';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietxemay.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietxemayComponent implements OnInit {

  xemay = new Xemay;
  constructor(private route:ActivatedRoute, private xemayService:XemayService) { }

  ngOnInit(): void {
    this.getRouteProXemay(this.route.snapshot.params['maMH']);
  }
  getRouteProXemay(maMH:any)
  {
    this.xemayService.searchXemay(maMH).subscribe((data:any)=>{
      console.log(data);
      this.xemay = data;
    })
  }
}
