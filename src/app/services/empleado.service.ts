import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpleado } from '../interfaces/iempleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL de la api de todos los empleados
  private baseUrl = "http://localhost:9002/api/empleados/"

  constructor(private privateClient: HttpClient) { }

  //Metodo para obtener los empleados
  getAllEmpleados(): Observable<IEmpleado[]>{
    return this.privateClient.get<IEmpleado[]>(this.baseUrl);
  }

  //Metodo para obtener el empleado
  findByIdEmpleado(idEmpleado: number): Observable<IEmpleado>{
    return this.privateClient.get<IEmpleado>(`${this.baseUrl}${idEmpleado}`);
  }

  //Metodo para dar de alta un empleado
  insertEmpleado(empleado: IEmpleado): Observable<IEmpleado>{
    return this.privateClient.post<IEmpleado>(`${this.baseUrl}alta`, empleado)
  }

  
  //Metodo para dar de alta un empleado
  updateEmpleado(empleado: IEmpleado): Observable<IEmpleado>{
    return this.privateClient.put<IEmpleado>(`${this.baseUrl}actualizar/${empleado.idEmpleado}`, empleado);
  }

  //Metodo para eliminar empleado
  deleteEmpleado(idEmpleado: number): Observable<IEmpleado>{
    return this.privateClient.delete<IEmpleado>(`${this.baseUrl}${idEmpleado}`);
  }
}
