import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getChartData(){
    const url = 'https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus';
    return this.http.get(url);
  }

  takeAction(){
    const url = 'https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum';
    return this.http.get(url);
  }
  
}
