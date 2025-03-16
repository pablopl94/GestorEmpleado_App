import { Component, inject, NgModule, OnInit } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';
import { FormEmpleadoComponent } from '../form-empleado/form-empleado.component';
import { ButtonsComponent } from "../../components/buttons/buttons.component";

@Component({
  selector: 'app-list-empleados',
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './list-empleados.component.html',
  styleUrl: './list-empleados.component.css'
})
export class ListEmpleadosComponent implements OnInit{

  empleados:IEmpleado[];
  constructor(private empleadoService: EmpleadoService){
    this.empleados = [];
  }

  ngOnInit(): void {
   this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoService.getAllEmpleados().subscribe(
      data =>{
        this.empleados = data;
      }
    )
  }

  actualizarLista(idEliminado: number) {
    this.obtenerEmpleados(); 
  }
 
}