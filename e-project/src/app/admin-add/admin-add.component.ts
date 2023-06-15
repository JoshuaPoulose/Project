// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-add',
//   templateUrl: './admin-add.component.html',
//   styleUrls: ['./admin-add.component.css']
// })
// export class AdminAddComponent {
//   topics: string[] = [];

//   deleteTopic(index: number): void {
//     this.topics.splice(index, 1);
//   }

//   addTopic(): void {
//     this.topics.push('');
//   }

//   attachFile(index: number): void {
//     // Implementation to handle file attachment for the corresponding topic
//     console.log('Attach file for topic:', this.topics[index]);
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  topics: string[]=[];

  deleteTopic(index: number): void {
    this.topics.splice(index, 1);
  }

  addTopic(): void {
    this.topics.push('');
  }

  attachFile(index: number): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/pdf'; // Specify the accepted file types here
    fileInput.addEventListener('change', (event) => {
      const files = (event.target as HTMLInputElement).files;
      // Handle the selected files, e.g., store them or perform any other operations
      console.log('Selected Files:', files);
    });
    fileInput.click();
  }
}

