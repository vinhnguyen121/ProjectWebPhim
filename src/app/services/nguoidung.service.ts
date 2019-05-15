import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private http: HttpClient) { }
  LayDSNguoiDung(): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`;
    const obs = this.http.get(url).pipe(map(res => res));
    return obs;
  }
}
