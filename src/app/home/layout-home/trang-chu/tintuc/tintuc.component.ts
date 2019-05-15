import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent implements OnInit {
  LoaiTin = 'dienanh';

  constructor() { }

  ChonLoaiTin(val: any) {
    this.LoaiTin = val;
  }

  ngOnInit() {
  }

}
