import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Employee } from 'src/Models/Employee'  
import { ROOT_URL } from 'src/Models/Config'  
import { Observable } from 'rxjs';  
@Injectable()  
export class EmployeeDataService {  
      employees: Observable<Employee[]>;  
      newemployee: Employee;  
      constructor(private http: HttpClient) {  
       }  

      getEmployee() {  
        return this.http.get<Employee[]>(ROOT_URL + 'api/v1/users/2212617');  
  }  

AddEmployee(emp: Employee) {  
     const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {
                Fname: emp.firstname, 
                Lname: emp.lastname, 
                Email: emp.email, 
                gender: emp.gender 
                 
    }  
    console.log(ROOT_URL);  
     return this.http.post<Employee>(ROOT_URL + '/Employees', body, { headers });  
}  

  EditEmployee(emp: Employee) {  
    console.log(emp);
   
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
                    timestamp: emp.timestamp, 
                    status: emp.status, 
                    code: emp.code, 
                    message: emp.menssage  
    }  
    return this.http.put<Employee>(ROOT_URL + 'api/v1/users/' + emp.id, body, { headers, params })  
 }

DeleteEmployee(emp: Employee) {  
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
                      Fname: emp.firstname, 
                    Lname: emp.lastname, 
                    Email: emp.email, 
                    ID: emp.id  
    }  
    return this.http.delete<Employee>(ROOT_URL + '/Employees/' + emp.id)  
   }  
 }