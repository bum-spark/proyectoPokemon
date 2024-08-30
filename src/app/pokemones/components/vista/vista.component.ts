import { Component } from '@angular/core';
import { HttpLaravelService } from '../../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.scss'
})
export class VistaComponent {
  Datos: any;
  id: number = 0;
  backgroundColor: string = '';
  nombre:string="";
  imageUrl: string = 'assets/poke.gif';
  imageLoaded: boolean = false;
  
  colorMap: Record<string, string> = {
    Agua: "#0190FF",
    Fuego: "#f0932b",
    Planta: "#00b894",
    Eléctrico: "#fed330",
    Hielo: "#74b9ff",
    Roca: "#2d3436",
    Volador: "#81ecec",
    Lucha: "#30336b",
    Veneno: "#6c5ce7",
    Normal: "#95afc0"
  };

constructor( public service: HttpLaravelService, private activatedRoute: ActivatedRoute, private router : Router, private confirmationService: ConfirmationService, private messageService: MessageService){
  this.activatedRoute.params.subscribe(params=>{
    console.log(params);
    this.id = params['id'];
    if(this.id){
      this.obtenerData();
    } 
  })
}

obtenerData(){
  this.service.Service_Get('pokemon', this.id).subscribe((response:any)=>{
    if (response.estatus) {
      this.Datos = response.data;
      const pokemonTypeName = this.capitalizeFirstLetter(this.Datos.tipo);
      this.backgroundColor = this.colorMap[pokemonTypeName] || '#95afc0';
      this.imageUrl = this.Datos.url;
    } else {
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: response.mensaje });
      this.router.navigate(['/vista/']);
    }
    console.log(response);
  });
}

onImageLoad() {
  this.imageLoaded = true;
}

onImageError() {
  this.imageUrl = 'src/assets/poke.gif';  // Si hay un error al cargar, muestra la imagen de carga
}

EliminarRegistro(event: Event) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: '¿Estás seguro de eliminar este registro?',
    icon: 'pi pi-info-circle',
    acceptButtonStyleClass: 'p-button-danger p-button-sm',
    acceptLabel: 'Sí',
    rejectLabel: 'No',
    accept: () => {
      this.service.Service_Delete('pokemon', this.Datos.id).subscribe((response: any) => {
        if (response.estatus) {
          this.messageService.add({
            severity: 'info',
            summary: 'Eliminado',
            detail: response.mensaje,
            life: 3000
          });
          this.router.navigate(['/vista/']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Problema',
            detail: response.mensaje,
            life: 3000
          });
        }
        console.log(response);
      });
    }
  });
}


    capitalizeFirstLetter(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    
}
