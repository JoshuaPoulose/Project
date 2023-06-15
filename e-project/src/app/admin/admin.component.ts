import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  topics: string[] = [];

  addTopic() {
    this.topics.push('');
  }

  deleteTopic(index: number) {
    this.topics.splice(index, 1);
  }
}
