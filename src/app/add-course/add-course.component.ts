import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  coursetitle=""
  description=""
  venue=""
  duration=""
  date=""

  constructor(private api:ApiService){
    
  }


  readValues=()=>{
    let data:any=
      {
        "coursetitle":this.coursetitle,
        "description":this.description,
        "venue":this.venue,
        "duration":this.duration,
        "date":this.date
      }
    
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
}
}
