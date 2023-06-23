import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Descuento } from '../interface/Descuento';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class DescuentoService{


  listurl = 'http://172.24.253.24:8083/v1/descuento';
  addurl  = 'http://172.24.253.24:8083/v1/descuento'

  constructor(private httpClient: HttpClient) {}

  public getDescuento(): Observable<any>{

        return this.httpClient.get(this.listurl);     
  }


  public agregarDescuento(agregardesc: Descuento): Observable<any> {
    console.log(agregardesc);
    return this.httpClient.post<any>(this.addurl , agregardesc);
  }

}