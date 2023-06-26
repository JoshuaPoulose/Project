import { Topic } from "./topic";



export class course {
  title: string='';
  description: string;
  topics: Topic[] = [];
  imageFile: File | null;
  imageUrl: string; // Add the imageUrl property

  constructor(
    title: string,
    description: string,
    topics: Topic[],
    imageFile: File
  ) {
    this.title = title;
    this.description = description;
    this.topics = topics;
    this.imageFile = imageFile;
    this.imageUrl = ''; // Initialize the imageUrl property
  }
}