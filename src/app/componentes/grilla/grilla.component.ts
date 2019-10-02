import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {


  @Input() listadoProductos: Array<Producto> = Array<Producto>();


  constructor() { }

  ngOnInit() {
  }

  public RefrescarLista( idProducto: number ) {
    this.listadoProductos = this.listadoProductos.filter(item => item.id !== idProducto);
  }

}
