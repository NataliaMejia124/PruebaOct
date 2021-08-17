import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router'
import { Usuario } from 'src/app/Modelo/Usuario';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userform= new FormGroup({ rol: new FormControl(''), nombre: new FormControl(''), activo: new FormControl('') });
  usuario:Usuario = new Usuario();
  id:any ={}
  constructor(private service: ServiceService, private router: Router) { }


  ngOnInit(): void {
    this.Editar()
  }
  Editar(){
    let edit:any = localStorage.getItem("id");
    this.id= JSON.parse(edit.toString());
    this.userform.setValue({
      rol: this.id.id_rol,
      nombre: this.id.nombre,
      activo: this.id.activo
    });

    // this.service.getUsuarioId(id.id_usuario).subscribe(data => {
    //   this.usuario=data;

    // })
  }

  Actualizar(){
    this.usuario={"id_usuario":this.id.id_usuario, "id_rol":this.userform.controls.rol.value.toString(), "nombre": this.userform.controls.nombre.value, "activo": this.userform.controls.activo.value}

    this.service.updateUsuario(this.usuario).subscribe(data => {
      this.usuario=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"])
    })
  }


}
