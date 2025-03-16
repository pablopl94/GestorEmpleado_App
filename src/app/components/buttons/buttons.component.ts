import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink, CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

@Input() miId!: number;
@Output() empleadoEliminado = new EventEmitter<number>();
@Input() parent: string = "";


constructor(private empleadoService: EmpleadoService, private router: Router){}


  backToHome() {
    this.router.navigate(['/home']);
  }

  deleteEmpleado() {
  this.empleadoService.deleteEmpleado(this.miId).subscribe({
    next: () => {
      console.log('Empleado eliminado:', this.miId);
      this.empleadoEliminado.emit(this.miId); 
      this.backToHome();
    },
    error: (error) => {
      console.error('Error al eliminar el empleado:', error);
    }
  });
  }


}
