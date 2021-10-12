import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API_KEY, TBM } from '../core/app.constant';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  searchForm!: FormGroup;
  searchResult: any;
  searchInfo!: any;
  newsResults!:any;
  constructor(
    private _fb: FormBuilder,
    private _searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getUserLocation();
    this.searchForm = this._fb.group({
      q: ['', Validators.required],
    });
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        console.log(position.coords.longitude);
      });
    } else {
      console.log('User not allow');
    }
  }
  onSearch(value: any) {
    if (this.searchForm.valid) {
      value = { ...value, tbm: TBM, location: '', api_key: API_KEY };
      this._searchService.getNewsData(value).subscribe((data: any) => {
        this.searchResult = data;
        this.newsResults = this.searchResult['news_results']; 
        this.searchInfo = this.searchResult['search_information'];
      });
    }
  }
}
