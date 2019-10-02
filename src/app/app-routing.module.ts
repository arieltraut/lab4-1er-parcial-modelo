// import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './componentes/producto/producto.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BuscarMostrarComponent } from './componentes/buscar-mostrar/buscar-mostrar.component';
import { BuscarInputComponent } from './componentes/buscar-input/buscar-input.component';
import { ProductoAltaComponent } from './componentes/producto-alta/producto-alta.component';


const routes: Routes = [
  // {path: 'inicio', component: BienvenidoComponent, data: {animation: 'FadePage'}},
  // {path: 'login', component: LoginComponent, data: {animation: 'Fade2Page'}},
  {path: 'productos', component: ProductoComponent},
  {path: 'grilla', component: GrillaComponent},
  {path: 'busqueda', component: BuscarMostrarComponent},
  {path: 'busqueda-input', component: BuscarInputComponent},
  {path: 'productos/alta', component: ProductoAltaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
