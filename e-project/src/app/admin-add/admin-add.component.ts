import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

import { CourseService } from "../course.service";
import { Topic } from "../topic";
import { course } from "../course";
// import { course } from "../course";


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  title: string = '';
  description: string = '';
  topics: Topic[] = [];
  imageFile!: File;

  constructor(private http: HttpClient, private courseService: CourseService) { }

  addTopic(): void {
    const topic = new Topic('');
    this.topics.push(topic);
  }

  deleteTopic(index: number): void {
    this.topics.splice(index, 1);
  }

  handleFileInput(event: any, index?: number): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      if (index !== undefined) {
        this.topics[index].content = fileList[0];
      } else {
        // Handle the file input for course description
        this.description = fileList[0].name;
      }
    }
  }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    this.imageFile = file;
  }

  addCourse(): void {
    const course1 = new course(this.title, this.description, this.topics, this.imageFile);
    console.log(course1);
    this.courseService.addCourse(course1).subscribe(
      (response) => {
        console.log('Course added successfully:', response);
        // Do something with the response if needed
      },
      (error) => {
        console.error('Failed to add course:', error);
        // Handle the error appropriately
      }
    );
  }

  }

