import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{title}}</h1>
    <h3>La base es: <strong> {{numero2}} </strong></h3>
    
    <button (click)="acumular(-numero2)"> -{{numero2}} </button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumular(numero2)"> +{{numero2}} </button>
    
    `

})

export class ContadorComponent {
    title = 'Contador App';

    numero: number =0;
  
    numero2: number =5;
  
    acumular(valor:number) {
      this.numero += valor;
    }

}