import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  usuario:Usuario = new Usuario();

  constructor(private router:Router, private service:ServiceService) { }

  userform= new FormGroup({ rol: new FormControl(''), nombre: new FormControl(''), activo: new FormControl('') });
  ngOnInit(): void {
  }

  Guardar(){
    this.usuario={"id_rol":this.userform.controls.rol.value, "nombre": this.userform.controls.nombre.value, "activo": this.userform.controls.activo.value}
    this.service.createUser(this.usuario).subscribe(data =>{
      alert("Usuario agregado exitosamente");
      this.router.navigate(["listar"]);
    })
  }

}
