import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.baseUrl,{
      params:new HttpParams().set('q',cityName)
      .set('appid',environment.ApiId)
      .set('units',environment.format)
    })
  }
}
