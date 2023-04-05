import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
  providers: [DataService]
})
export class EmployeeInfoComponent {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1() {
    // this.getInfoFromService1 = this.dservice.getInfo1();
  }
  getInfoFromService2() {

  }
  getInfoFromService3() {

  }

  constructor(private dservice: DataService) {}

}
