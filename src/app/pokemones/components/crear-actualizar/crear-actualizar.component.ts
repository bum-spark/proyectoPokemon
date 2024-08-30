import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpLaravelService } from '../../../http.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface PokemonType {
  name: string;
  tipo: string
}

@Component({
  selector: 'app-crear-actualizar',
  templateUrl: './crear-actualizar.component.html',
  styleUrl: './crear-actualizar.component.scss'   
})
export class CrearActualizarComponent implements OnInit {
  public CrearActualizarFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    url: ['', [Validators.required]],
    hp: ['', [Validators.required, Validators.min(0), Validators.max(999)]],
    defensa: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    ataque: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    rapidez: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
  });

  ID = 0;
  pokemonTypes: PokemonType[] | undefined;
  selectedPokemonType: string | undefined;

  constructor(private fb: FormBuilder, public servicio: HttpLaravelService, private activatedRoute: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Params:', params);  
      this.ID = params['id'];
      if (this.ID) {
        this.obtenerData();
      }
    });
  }


  obtenerData() {
    this.servicio.Service_Get('pokemon', this.ID).subscribe((res: any) => {
      console.log('Respuesta de obtenerData:', res);  // Log para ver la respuesta de obtenerData
      if (res.estatus) {
        this.CrearActualizarFormulario.patchValue(res.data);
      } else {
        Swal.fire({
          icon: "error",
          title: res.mensaje,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['vista']);
      }
    });
  }

  isValid(field: string): boolean {
    return !!(this.CrearActualizarFormulario.controls[field].errors && this.CrearActualizarFormulario.controls[field].touched);
  }

  get f() { return this.CrearActualizarFormulario.controls; }

  Guardar() {
    console.log('Formulario es válido:', this.CrearActualizarFormulario.valid);  
    console.log('Datos del formulario:', this.CrearActualizarFormulario.value); 

    if (this.CrearActualizarFormulario.invalid) {
      this.CrearActualizarFormulario.markAllAsTouched();
      console.log('Formulario es inválido, se marcaron todos los campos como tocados');
      return;
    }

    if (this.ID === undefined) {
      this.servicio.Service_Post('pokemon', '', this.CrearActualizarFormulario.value).subscribe((res: any) => {
        console.log('Respuesta de creación:', res);  
        if (res.estatus) {
          this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Pokémon Creado!' });
          this.CrearActualizarFormulario.reset();
          this.router.navigate(['ver', res.data.id]);
        } else {
          this.mostrarErrores(res.mensaje);
        }
      });
    } else {
      this.servicio.Service_Patch('pokemon', this.ID, this.CrearActualizarFormulario.value).subscribe((res: any) => {
        console.log('Respuesta de modificación:', res);  
        if (res.estatus) {
          this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Pokémon Modificado!' });
          this.CrearActualizarFormulario.reset();
          this.router.navigate(['ver', this.ID]);
        } else {
          this.mostrarErrores(res.mensaje);
        }
      });
    }
  }

  mostrarErrores(mensajes: any) {
    let message = '';
    if (mensajes.nombre) {
      message = "Necesitas ingresar un nombre valido\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.tipo) {
      message = "Necesitas ingresar un tipo válido\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.url) {
      message = "Necesitas ingresar una URL válida\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.hp) {
      message = "Necesitas ingresar un hp válido\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.defensa) {
      message = "Necesitas ingresar una defensa válida\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.ataque) {
      message = "Necesitas ingresar un ataque válido\n"
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    if (mensajes.rapidez) {
      message = "Necesitas ingresar una rapidez valida\n";
      return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: message  });
    }
    return this.messageService.add({ severity: 'error', summary: 'Problemas al guardar', detail: mensajes  });
    
    
  }

  ngOnInit() {
    this.pokemonTypes = [
      { name: 'Agua', tipo:"#0190FF"},
      { name: 'Fuego', tipo:"#f0932b"},
      { name: 'Planta', tipo:"#00b894"},
      { name: 'Eléctrico', tipo:"#fed330"},
      { name: 'Hielo', tipo:"#74b9ff"},
      { name: 'Roca', tipo:"#2d3436"},
      { name: 'Volador', tipo:"#81ecec"},
      { name: 'Lucha', tipo:"#30336b"},
      { name: 'Veneno', tipo:"#6c5ce7"},
      { name: 'Normal', tipo:"#95afc0"},
    ];
  }

  
}
