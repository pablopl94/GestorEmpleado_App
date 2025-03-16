import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { IEmpleado } from '../../interfaces/iempleado';
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-empleados',
  imports: [ButtonsComponent, CommonModule],
  templateUrl: './details-empleados.component.html',
  styleUrl: './details-empleados.component.css'
})
export class DetailsEmpleadosComponent {

  id!: number;
  empleado!: IEmpleado;
  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['idEmpleado'];
      this.empleadoServicio.findByIdEmpleado(id).subscribe({
        next: (empleado) => {
          this.empleado = empleado; 
        },
        error: (error) => {
          console.error('Error al obtener empleado:', error);
        }
      });
    });
  }

}
