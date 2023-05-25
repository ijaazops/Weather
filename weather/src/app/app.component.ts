import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private weatherService:WeatherService,private toastrService:ToastrService){

  }
    cityName:string= 'Wanduragala';
   weatherData?:WeatherData;


  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next : (response)=>{
        this.weatherData=response;
        console.log(response);
      },
      error: (response)=>{
        this.toastrService.error('Not Found','Invalid Location');
        console.log(response);
      }
    })
  }
}
