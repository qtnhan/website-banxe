import { Component, OnInit } from '@angular/core';
import { Xetayga } from 'src/app/models/xetayga.model';
import { XetaygaService } from 'src/app/services/xetayga.service';

@Component({
  selector: 'app-xetayga',
  templateUrl: './xetayga.component.html',
  styleUrls: ['./xetayga.component.css']
})
export class XetaygaComponent implements OnInit {

  datas:Xetayga[] = [];
  public maMH1 = '';
  constructor(private prod:XetaygaService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.prod.getAllXetayga().subscribe((data:any)=>{
      this.datas = data;
    });
  }
}
