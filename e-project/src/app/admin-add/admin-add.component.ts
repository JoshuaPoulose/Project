
import { Component } from "@angular/core";

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
    console.log(this.topics);
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

  convertTopicsToString(): string {
    return this.topics.join(', ');
  }
}

// import { Component } from '@angular/core';

// interface Topic {
//   topic: string;
//   description: string;
//   file: File | null;
// }

// @Component({
//     selector: 'app-admin-add',
//     templateUrl: './admin-add.component.html',
//     styleUrls: ['./admin-add.component.css']
//   })
//   export class AdminAddComponent {
//   courseName: string = '';
//   courseId: string = '';
//   topics: Topic[] = [];
//   isFileAttached = false;

//   addTopic(): void {
//     this.topics.push({
//       topic: '',
//       description: '',
//       file: null
//     });
//   }

//   removeTopic(index: number): void {
//     this.topics.splice(index, 1);
//     this.checkFileAttached();
//   }

//   fileSelected(event: Event, index: number): void {
//     const inputElement = event.target as HTMLInputElement;
//     const files = inputElement.files;
//     if (files && files.length > 0) {
//       this.topics[index].file = files[0];
//     } else {
//       this.topics[index].file = null;
//     }
//     this.checkFileAttached();
//   }

//   checkFileAttached(): void {
//     this.isFileAttached = this.topics.some(topic => topic.file !== null);
//   }

//   submitForm(): void {
//     // Perform form submission logic here
//     console.log(this.courseName);
//     console.log(this.courseId);
//     console.log(this.topics);
//   }
// }



