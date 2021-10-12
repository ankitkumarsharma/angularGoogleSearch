import { API_KEY, ENGINE } from './../core/app.constant';
import { searchModel } from './../core/app.model';
import { SearchService } from './../core/services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;
  searchResult: any;
  knowledgeGraph!: any;
  twitterResult!: any;
  organicResult!: any;
  searchInfo!: any;
  constructor(
    private _fb: FormBuilder,
    private _searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchForm = this._fb.group({
      q: ['', Validators.required],
    });
  }
  onSearch(value: any) {
    if (this.searchForm.valid) {
      value = { ...value, engine: ENGINE, api_key: API_KEY };
      this._searchService.getData(value).subscribe((data: any) => {
        this.searchResult = data;
        this.knowledgeGraph = this.searchResult['knowledge_graph'];
        this.searchInfo = this.searchResult['search_information'];
        this.twitterResult = this.searchResult['twitter_results'];
        this.organicResult = this.searchResult['organic_results'];
      });
    }
  }
}
