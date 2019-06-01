import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NguoiDung } from '../models/NguoiDung';

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
  XoaNguoiDung(taiKhoan: any): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    const oBs = this.http.delete(url).pipe(map((res: Response) => res.json()));
    return oBs;
  }
  ThemNguoiDung(nguoidung: NguoiDung): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const obS = this.http.post(url, nguoidung, { headers: header }).pipe(map(res => res));
    return obS;
  }
  CapNhatInfoNguoiDung(nguoidung: NguoiDung): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const obse = this.http.post(url, nguoidung, { headers: header }).pipe(map((res: Response) => res.json()));
    return obse;
  }
}
