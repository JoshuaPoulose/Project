import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Course } from "../course";
import { CourseService } from "../course.service";
import { Topic } from "../topic";

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  title: string='';
  description:string='';
  topics: Topic[]=[];
  file!: File;



  onImageChange(event: Event): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      this.file = fileList[0];
      // Perform additional operations with the selected image if needed
    }
  }
  

  constructor(private http:HttpClient,private courseservice:CourseService){}

  addTopic(): void {
    const topic = new Topic('','');
    this.topics.push(topic);
  }
  onFileChange(event: any): void {
   const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }
    addCourse(): void {
      const course = new Course(this.title, this.description,this.topics );
      console.log(course)
      this.courseservice.addCourse(course)
        .subscribe(
          (response: any) => {
            console.log('Course added successfully:', response);
          },
          (error: any) => {
            console.error('Failed to add course:', error);

          }
        );

    }

  }

