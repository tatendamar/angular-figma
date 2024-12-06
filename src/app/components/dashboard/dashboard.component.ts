import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Item {
  id: number;
  title: string;
  content: string;
  isStarred: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: Item[] = [
    { id: 1, title:"Timbuk2 - 5 days ago", content: "Item 1", isStarred: false },
    { id: 2, title:"Timbuk2 - 5 days ago", content: "Item 2", isStarred: false },
    { id: 3, title:"Timbuk2 - 5 days ago",
       content: "Item 3,Item 3, Item 3,Item 3,Item 3,Item 3",
        isStarred: false },
    { id: 4, title:"Timbuk2 - 5 days ago", content: "Item 4", isStarred: false },
    { id: 5, title:"Timbuk2 - 5 days ago",
       content: "Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5,Item 5",
        isStarred: false },
    { id: 6,title:"Timbuk2 - 5 days ago",
      content: "Item 5,Item 5,Item 5,Item 5,Item 5,Item 5",  isStarred: false }
  ];

   selectedStars: boolean = false ;


   toggleStar(itemId: number) {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      item.isStarred = !item.isStarred;
    }
  }

}
