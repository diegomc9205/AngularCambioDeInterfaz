import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-dos',
  templateUrl: './ejercicio-dos.component.html',
  styleUrls: ['./ejercicio-dos.component.css']
})
export class EjercicioDosComponent {

  alimetos: string[] = []
  alimento: string = ""
  limpiar: Boolean = false

  agregarAlimento(): void {
    this.limpiar = false
    this.alimetos.push(this.alimento)
    this.alimento = ""
  }

  limpiarLista() : void{
    this.alimetos = []
    this.limpiar = true
  }
}
