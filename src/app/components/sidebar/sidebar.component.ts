import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule, SearchbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() { }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
