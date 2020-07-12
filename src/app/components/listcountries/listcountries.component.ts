import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';


@Component({
  selector: 'app-listcountries',
  templateUrl: './listcountries.component.html',
  styleUrls: ['./listcountries.component.css']
})
export class ListcountriesComponent implements OnInit {

  countries: [] = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((resp: any) => {
      this.countries = resp;
      console.log(this.countries);
    });
  }

}
