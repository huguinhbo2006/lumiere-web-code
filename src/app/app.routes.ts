import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Licenciatura } from './paginas/licenciatura/licenciatura';
import { Preparatoria } from './paginas/preparatoria/preparatoria';
import { Planteles } from './paginas/planteles/planteles';
import { ExamenGratis } from './paginas/examen-gratis/examen-gratis';
import { Exani } from './paginas/exani/exani';
import { Puntajes } from './paginas/puntajes/puntajes';
import { Ubicaciones } from './paginas/ubicaciones/ubicaciones';
import { Calculadora } from './paginas/calculadora/calculadora';
import { ModuloExani } from './paginas/modulo-exani/modulo-exani';
import { MaterialEstudio } from './paginas/material-estudio/material-estudio';
import { Comunidad } from './paginas/comunidad/comunidad';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'home', component: Home},
    { path: 'licenciatura', component: Licenciatura},
    { path: 'preparatoria', component: Preparatoria},
    { path: 'planteles', component: Planteles},
    { path: 'examenGratis', component: ExamenGratis},
    { path: 'exani', component: Exani},
    { path: 'puntajes', component: Puntajes},
    { path: 'ubicaciones', component: Ubicaciones},
    { path: 'calculadora', component: Calculadora},
    { path: 'moduloExani', component: ModuloExani},
    { path: 'material', component: MaterialEstudio},
    { path: 'comunidad', component: Comunidad},
];
