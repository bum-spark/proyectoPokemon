import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpLaravelService } from "../../services/http.service";
import { Router } from "@angular/router";
import { LocalstorageService } from "../../../localstorage.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-pokemones-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('este') cardElement!: ElementRef;

    constructor(
        public fb: FormBuilder, 
        public service: HttpLaravelService, 
        private router: Router,
        private localStorage: LocalstorageService,
        private renderer: Renderer2
    ) {
        this.localStorage.clean();
    }

    public formulario: FormGroup = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]]
    })

    Guardar() {
        if (this.formulario.invalid) {
            this.formulario.markAllAsTouched();
            return;
        }
        console.log(this.formulario.value);

        this.service.Service_Post('user', 'login', this.formulario.value).subscribe((data: any) => {
            console.log(data);

            if (data.status) {
                this.localStorage.setItem('accessToken', data.access_token);
                this.router.navigate(['/']);
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: data.mensaje,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }, error => {
            console.log(error);
        })

        this.formulario.reset({ email: '', password: '' });
    }

    isValid(field: string): null | boolean {
        return this.formulario.controls[field].errors && this.formulario.controls[field].touched;
    }

    get f() {
        return this.formulario.controls;
    }

    ngAfterViewInit() {
        if (this.cardElement) {
            this.renderer.addClass(this.cardElement.nativeElement, 'show');
        }
    }
}
