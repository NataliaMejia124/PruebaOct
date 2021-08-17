import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Usuario } from 'src/app/Modelo/Usuario';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUsuario().subscribe(data =>{ debugger;
      this.usuarios=data;
    })
  }
  Editar(usuario: Usuario): void {
    localStorage.setItem("id", JSON.stringify(usuario));
    this.router.navigate(["edit"]);
  }
  Delete(usuario: Usuario){
    this.service.deleteUsuario(usuario).subscribe(data => {
        usuario=data;
        alert("Usuario Elimidado exitosamente");
    })

  }

}
