import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Xemay } from 'src/app/models/xemay.model';
import { XemayService } from 'src/app/services/xemay.service';


@Component({
  selector: 'app-xemay',
  templateUrl: './xemay.component.html',
  styleUrls: ['./xemay.component.css']
})
export class XemayComponent implements OnInit {
  datas:Xemay[] = [];
  public maMH1 = '';
  constructor(private prod:XemayService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.prod.getAllXemay().subscribe((data:any) => {
      this.datas = data;
    })
  }
}
