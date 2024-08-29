import { Component } from '@angular/core';
import { HttpLaravelService } from '../../../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrl: './vista-general.component.scss'
})
export class VistaGeneralComponent {
  Datos: any[] = [];
  page: number = 0;
  rows: number = 3;
  total: number = 0;
  aparecio: boolean = true;

  constructor(private servicio: HttpLaravelService){
    this.obtenerData();
  }

  obtenerData(){
    this.aparecio = true;
    this.servicio.Service_Get_Paginator('pokemon', '', this.page, this.rows).subscribe((response:any)=>{
      if (response.estatus) {
        this.Datos = response.data;
        this.total = response.total;
        console.log(this.Datos);
        this.aparecio = false;
      }
      console.log(response);
    });
  }

  cargarNombresUsuarios() {
    this.Datos.forEach((item) => {
      this.servicio.Service_Get('usuario', item.id_user).subscribe((response:any)=>{
        if (response.estatus) {
          item.nombreUsuario = response.data.name;
        } else {
          item.nombreUsuario = 'Desconocido';
        }
      });
    });
  }

  onPageChange(event: any) {
    console.log(event);
    this.page = event.page;
    this.rows = event.rows;
    this.obtenerData();
  }

  impirimir(este:any){
    console.log();
    
  }
}
