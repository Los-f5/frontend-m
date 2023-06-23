import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReniecService{

 num = 'https://api.apirestperu.com/search/dni/';
 token1 = '/81c4e408-46bf-4107-9216-c368868e42f0'
 

  constructor(private httpClient: HttpClient) {}
   // 
  //public usuario(usuariodni : Userdni ): Observable<any>{
       
 //       return this.httpClient.get(this.num + usuariodni.dni +this.token1);

  //  }
  
  
  
}