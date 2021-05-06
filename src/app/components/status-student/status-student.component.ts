import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-status-student',
  templateUrl: './status-student.component.html',
  styleUrls: ['./status-student.component.css']
})
export class StatusStudentComponent implements OnInit {

  data: any;
  id: any;
  sciListid: StudentInformationCore | undefined;

  constructor( private aRoute: ActivatedRoute,
               private sci: StudentCoreInformationService) {
      this.aRoute.snapshot.paramMap.get('id');
      this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.aRoute.snapshot.params.id;
    this.getStudentListID();
  }

  getStudentListID(){
    this.sci.getStudentListID(this.id).subscribe(data => {
      this.sciListid = data;
    })
  }

}
