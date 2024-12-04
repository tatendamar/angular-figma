import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SkeletonLoaderComponent } from './skeleton/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SidebarComponent, DashboardComponent, SkeletonLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-figma';
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
