import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-show-student-by-id',
  templateUrl: './show-student-by-id.component.html',
  styleUrls: ['./show-student-by-id.component.css']
})
export class ShowStudentByIdComponent implements OnInit {
  data: any;
  id: any;
  sciListid = new StudentInformationCore();



  constructor(private aRoute: ActivatedRoute, private sci: StudentCoreInformationService) {
    // this.aRoute.snapshot.paramMap.get('id');
    // this.id = +this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(){
    console.log(this.aRoute.snapshot.params.id);
    this.id = this.aRoute.snapshot.params.id;
    this.getStudentListID();
  }

  getStudentListID(){
    this.sci.getStudentListID(this.id).subscribe(res=> {
      // console.log(res);
      this.data = res;
      this.sciListid = this.data;
    })
  }


}
