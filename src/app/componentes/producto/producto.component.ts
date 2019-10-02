import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos: Array<Producto>;

  constructor(private productoServ: ProductosService) { }

  ngOnInit() {
    this.productoServ.TraerTodos()
    .subscribe(
      data => {this.productos = data;
      // tslint:disable-next-line: no-console
               console.info(data);

    });
  }

}
