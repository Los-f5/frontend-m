import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteNuevo } from '../interface/ClienteNuevo';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class ClienteService {


    agregarcliente      = 'http://172.24.253.24:8082/v1/clientes';

    cli_vuelos= 'http://172.24.253.24:8082/v1/clientes';


    constructor(private httpClient: HttpClient) {}

  public getDescuento(): Observable<any>{

        return this.httpClient.get(this.cli_vuelos);
  }


  public postCliente(agregarcli: ClienteNuevo): Observable<any> {
    console.log(agregarcli);
    return this.httpClient.post<any>(this.agregarcliente , agregarcli);
  }



} 