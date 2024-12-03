import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-skelleton-loader',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SearchbarComponent],
  templateUrl: './skelleton-loader.component.html',
  styleUrls: ['./skelleton-loader.component.css']
})
export class SkelletonLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
