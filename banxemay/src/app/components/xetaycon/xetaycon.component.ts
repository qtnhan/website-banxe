import { Component, OnInit } from '@angular/core';
import { Xetaycon } from 'src/app/models/xetaycon.model';
import { XetayconService } from 'src/app/services/xetaycon.service';

@Component({
  selector: 'app-xetaycon',
  templateUrl: './xetaycon.component.html',
  styleUrls: ['./xetaycon.component.css']
})
export class XetayconComponent implements OnInit {
  datas:Xetaycon[] = [];
  public maMH1 = '';
  constructor(private prod:XetayconService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.prod.getAllXetaycon().subscribe((data:any) => {
      this.datas = data;
    })
  }
}
