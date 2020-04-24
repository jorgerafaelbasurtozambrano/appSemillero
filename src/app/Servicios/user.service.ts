import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:57484/api/"
  constructor(private http: HttpClient) { }
  private _header = new HttpHeaders().set('Content-Type', 'application/json ');
  _consultarAlumno(
    _cedula:string,
  ){
    const _body ={cedula:_cedula}
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'Register',_body,{headers:this._header})
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  reject(err);
                });
    });
  }
}
