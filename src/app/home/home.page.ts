import { Injectable, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable()
export class HomePage implements OnInit {
  public credencial: FormGroup;
  public registro: FormGroup;
  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder
  ) {
    this.credencial = formBuilder.group({
      cedula: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    });
    this.registro = formBuilder.group({
      cedula: ['', [Validators.required]],
    });
  }
  campoCrendencial(event){
    event.target.value = event.target.value.replace(/[^0-9]*/g, '');
    if(event.target['value'].length == 0){
      this.credencial.controls['cedula'].reset();
    }
  }
  campoCedula(event){
    event.target.value = event.target.value.replace(/[^0-9]*/g, '');
    if(event.target['value'].length == 0){
      this.registro.controls['cedula'].reset();
    }
  }
  // registrar(){
  //   console.log(this.registro.controls['cedula'].value)
  // }
  registrar() {
    this.userService._consultarAlumno(
      this.registro.controls['cedula'].value
    )
      .then(data => {
      }).catch(error => {
      }).finally(() => {
      });
  }
  // get formCredencial() {
  //   return this.credencial.get("_formCredencial");
  // }
  ngOnInit() {
    // console.log(this.credencial)
  }

}
