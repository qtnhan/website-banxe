import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietsanphamComponent } from './components/chitietsanpham/chitietsanpham.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { XemayComponent } from './components/xemay/xemay.component';
import { XetayconComponent } from './components/xetaycon/xetaycon.component';
import { XetaygaComponent } from './components/xetayga/xetayga.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'xemay', component:XemayComponent},
  {path: 'xetayga', component:XetaygaComponent},
  {path: 'xetaycon', component:XetayconComponent},
  {path: 'product', component:ProductComponent},
  {path: 'chitiet/:maMH', component:ChitietsanphamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
