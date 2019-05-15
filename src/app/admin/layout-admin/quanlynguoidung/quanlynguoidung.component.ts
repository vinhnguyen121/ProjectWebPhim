import { Component, OnInit } from '@angular/core';
import { NguoidungService } from 'src/app/services/nguoidung.service';
import { NguoiDung } from 'src/app/models/NguoiDung';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.scss']
})
export class QuanlynguoidungComponent implements OnInit {

  constructor(private nguoidungservice: NguoidungService) { }
  DSNguoiDung: NguoiDung[] = [];
  ngOnInit() {
    this.nguoidungservice.LayDSNguoiDung().subscribe(
      (kq: any) => {
        this.DSNguoiDung = kq;
      }
    );
  }

}
