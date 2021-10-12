import { Component, OnInit } from '@angular/core';
import { LOGO_IMG } from 'src/app/core/app.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerLogo = LOGO_IMG;
  constructor() { }

  ngOnInit(): void {
  }

}
