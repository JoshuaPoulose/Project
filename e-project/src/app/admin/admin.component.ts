import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  courses = [

    { title: 'Python',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczajFgzNmGEHv9a0T91q9Q2AN_B1iRHPNNAtP2dt3FwgTjOb5ROZY5u-uziIFHeM-ELA&usqp=CAU' },

    { title: 'Data Science', image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },

    { title: 'Data Analyst',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'JavaScript',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'Angular',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'Java',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'SQL',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'Python',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'C++',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    
    { title: 'C',  image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    // Add more courses as needed

  ];

  isLoggedIn = false;

  showPopup = false;

  popupMessage = '';

  constructor(private router: Router) {}

  navigateTo(course: any) {

    if (this.isLoggedIn) {

      this.router.navigate(['/courses']);

    } else {

      this.popupMessage = 'Please log in to continue.';

      this.showPopup = true;

      this.router.navigate(['/courseitem']);

    }

  }
}
