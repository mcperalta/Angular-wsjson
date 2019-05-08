import { Component, OnInit, ViewChild } from '@angular/core';  
import { EmployeeAddComponent } from '../employee-add/employee-add.component';  
import { EmployeeDataService } from '../DataService/EmployeeDataService'  
import { Employee } from 'src/Models/Employee'  
import { Router } from '@angular/router';  
import { EmployeeupdateComponent } from '../employeeupdate/employeeupdate.componente';
@Component({  
  selector: 'app-angular-crud',  
  templateUrl: './angular-crud.component.html',  
  styleUrls: ['./angular-crud.component.css']  
})  
export class AngularCRUDComponent implements OnInit {  
      emplist: Employee[];  
      dataavailbale: Boolean = false;  
      tempemp: Employee  ;
      dataservice:EmployeeDataService

  constructor(dataservice:EmployeeDataService, private route: Router) {  }  
  ngOnInit() {  
    this.LoadData();  
  }  

LoadData() {  
    this.dataservice.getEmployee().subscribe((tempdate) => {  
      this.emplist = tempdate;  
      console.log(this.emplist);  
      if (this.emplist.length > 0) {  
        this.dataavailbale = true;  
      }     
      else {  
        this.dataavailbale = false;  
      }  
}  
)  
  , err => {  
    console.log(err);  
  }  
  }  
  deleteconfirmation(id: number) {  

if (confirm("Are you sure you want to delete this ?")) {  
  this.tempemp = new Employee();  
  this.tempemp.id = id;  
  this.dataservice.DeleteEmployee(this.tempemp).subscribe(res => {  
    alert("Deleted successfully !!!");  
    this.LoadData();  
  })  
}  
  }  
  @ViewChild('empadd') addcomponent: EmployeeAddComponent  
  @ViewChild('regForm') editcomponent: EmployeeupdateComponent  
  loadAddnew() {  
    this.addcomponent.objemp.email = ""  
    this.addcomponent.objemp.firstname = ""  
    this.addcomponent.objemp.lastname = ""  
    this.addcomponent.objemp.id = 0  
    this.addcomponent.objemp.gender = ""  
  }  
  loadnewForm(id: number, email: string, firstname: string, lastname: string, gender: string) {  
    console.log(gender);  
    this.editcomponent.objemp.email = email  
    this.editcomponent.objemp.firstname = firstname  
    this.editcomponent.objemp.lastname = lastname  
    this.editcomponent.objemp.id = id 
    this.editcomponent.objemp.gender = gender  
  }  
  RefreshData() {  
    this.LoadData();  
  }  
}