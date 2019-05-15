import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';



const routes: Routes = [
  {
    path: '', component: LayoutHomeComponent, children: [
      { path: '', component: TrangChuComponent },
      { path: 'trangchu', component: TrangChuComponent },
      { path: 'trangchitiet', component: TrangChiTietComponent },
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
