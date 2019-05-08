import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { EmployeeupdateComponent} from './employeeupdate/employeeupdate.componente';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //templateUrl: './employeeupdate/employeeupdate.componente.html',
  templateUrl: './employeelist/employeelist.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Mi Formulario';
  contacto: FormGroup;
  submitted=false;
  titulo='Crear un Formulario con Angular';

  constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
            postre: ['', Validators.required],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.contacto.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        if (this.contacto.invalid) {
            return;
        }
 
        alert('Mensaje Enviado !')
    }
  }