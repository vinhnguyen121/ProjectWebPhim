import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HeaderComponent } from './layout-home/header/header.component';
import { FooterComponent } from './layout-home/footer/footer.component';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhimComponent } from './layout-home/trang-chu/phim/phim.component';
import { SliderComponent } from './layout-home/trang-chu/slider/slider.component';
import { DangchieuComponent } from './layout-home/trang-chu/phim/dangchieu/dangchieu.component';
import { SapchieuComponent } from './layout-home/trang-chu/phim/sapchieu/sapchieu.component';
import { CumrapComponent } from './layout-home/trang-chu/cumrap/cumrap.component';
import { TintucComponent } from './layout-home/trang-chu/tintuc/tintuc.component';
import { QuangcaoComponent } from './layout-home/trang-chu/quangcao/quangcao.component';
import { ItemPhimComponent } from './layout-home/trang-chu/phim/item-phim/item-phim.component';
import { LichchieuComponent } from './layout-home/trang-chi-tiet/lichchieu/lichchieu.component';
import { ThongtinphimComponent } from './layout-home/trang-chi-tiet/thongtinphim/thongtinphim.component';
import { StatusDatveComponent } from './layout-home/trang-chu/status-datve/status-datve.component';
import { Dienanh24hComponent } from './layout-home/trang-chu/tintuc/dienanh24h/dienanh24h.component';
import { ReviewComponent } from './layout-home/trang-chu/tintuc/review/review.component';
import { KhuyenmaiComponent } from './layout-home/trang-chu/tintuc/khuyenmai/khuyenmai.component';
import { ListRapPhimComponent } from './layout-home/trang-chu/cumrap/list-rap-phim/list-rap-phim.component';
import { SuatchieuComponent } from './layout-home/trang-chu/cumrap/suatchieu/suatchieu.component';
import { ItemrapphimComponent } from './layout-home/trang-chu/cumrap/itemrapphim/itemrapphim.component';
import { CinemaComponent } from './layout-home/trang-chu/cumrap/list-rap-phim/cinema/cinema.component';
import { CinestarComponent } from './layout-home/trang-chu/cumrap/list-rap-phim/cinestar/cinestar.component';
import { DangKyComponent } from './layout-home/trang-chu/dang-ky/dang-ky.component';
import { DangNhapComponent } from './layout-home/trang-chu/dang-nhap/dang-nhap.component';
import {FormsModule} from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    TrangChuComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,
    CumrapComponent,
    TintucComponent,
    QuangcaoComponent,
    ItemPhimComponent,
    LichchieuComponent,
    ThongtinphimComponent,
    StatusDatveComponent,
    Dienanh24hComponent,
    ReviewComponent,
    KhuyenmaiComponent,
    ListRapPhimComponent,
    SuatchieuComponent,
    ItemrapphimComponent,
    CinemaComponent,
    CinestarComponent,
    DangKyComponent,
    DangNhapComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    OwlModule
  ],
  exports: [
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    TrangChuComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,
    StatusDatveComponent,
    Dienanh24hComponent,
    ReviewComponent,
    KhuyenmaiComponent,
    ItemrapphimComponent,
    CinemaComponent,
    CinestarComponent,
    DangKyComponent,
    DangNhapComponent
  ]
})
export class HomeModule { }
