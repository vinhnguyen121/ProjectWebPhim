import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Phim } from '../models/Phim';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: variable-name
  LayDSPhim(): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    const obs = this.http.get(url).pipe(map(res => res));
    return obs;
  }
  XoaPhim(id: any): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`;
    const Obs = this.http.delete(url).pipe(map((res: Response) => res.json()));
    return Obs;
  }
  ThemPhim(phim: Phim): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const obS = this.http.post(url, phim, { headers: header }).pipe(map(res => res));
    return obS;
  }
  SuaPhim(phim: Phim): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const oBs = this.http.post(url, phim, {headers: header} ).pipe(map(res => res));
    return oBs;
    // gui la ben nay chu
  }

}
