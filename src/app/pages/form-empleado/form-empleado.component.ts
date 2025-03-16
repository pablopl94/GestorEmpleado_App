
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpleado } from '../../interfaces/iempleado';

@Component({
  selector: 'app-form-empleado',
  imports: [FormsModule],
  templateUrl: './form-empleado.component.html',
  styleUrl: './form-empleado.component.css'
})
export class FormEmpleadoComponent implements OnInit {

  empleado: IEmpleado;
  isEdit: boolean;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isEdit = false;
    this.empleado = { idEmpleado: 0, nombre: "", apellidos: "", email: "" }
  }

  ngOnInit() {
    // Obtener el ID desde la URL y cargar los datos si existe
    this.activatedRoute.params.subscribe(params => {
      const idEmpleado: number =(params['idEmpleado']); 
      if (idEmpleado) {
        this.isEdit = true;
        this.loadEmpleado(idEmpleado);
      } else {
        this.isEdit = false;
      }
    });
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  // Cargar datos del empleado si es edición
  loadEmpleado(idEmpleado: number) {
    this.empleadoService.findByIdEmpleado(idEmpleado).subscribe({
      next: (data) => {
        this.empleado = data; // Se asignan los datos al modelo (empleado)
      },
      error: (error) => {
        console.error('Error al obtener empleado:', error);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return; // Si el formulario no es válido, se detiene

    if (this.isEdit) {
      // Actualizar empleado si es edición
      this.empleadoService.updateEmpleado(this.empleado).subscribe({
        next: () => {
          alert(`Empleado actualizado correctamente`);
          this.backToHome();
        },
        error: (error) => {
          console.error('Error al actualizar el empleado:', error);
        }
      });
    } else {
      // Insertar nuevo empleado si no es edición
      this.empleadoService.insertEmpleado(this.empleado).subscribe({
        next: () => {
          alert(`Empleado insertado correctamente`);
          form.resetForm(); // Se limpia el formulario después de insertar
          this.backToHome();
        },
        error: (error) => {
          console.error('Error al dar de alta el usuario:', error);
        }
      });
    }
  }
}