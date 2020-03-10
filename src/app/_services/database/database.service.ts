import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  static readonly GET_Static_URL = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=QadKBfJuQDhBNTWCPzFf4MKhTBHtpaUIWvMKuT3d&format=JSON'; 

  key = "QadKBfJuQDhBNTWCPzFf4MKhTBHtpaUIWvMKuT3d";


  gettableData(): Observable<any> {
    let url = DatabaseService.GET_Static_URL+this.key + '&format=JSON';
    return this.http.get(DatabaseService.GET_Static_URL);
  }

}