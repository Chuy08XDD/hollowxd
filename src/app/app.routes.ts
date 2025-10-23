import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './page/counter/page-component';
import { HeroPageComponent } from './page/hero/hero-page-component';
import { VistaPageComponent } from './Vista/vista-page-component';
import { EnemigosPageComponent } from './Vista/enemigos/enemigos-page-component';
import { PokemonPageComponent } from './page/Pokemon/pokemon-page-component';
import { JefesPageComponent } from './Vista/jefes/jefes-page-component';
import { MapaPageComponent } from './Vista/mapa/mapa-page-component';
import { AmuletosPageComponent } from './Vista/amuletos/amuletos-page-component';
import { HabilidadesPageComponent } from './Vista/habilidades/habilidades-page-component';
import { PersonajesPageComponent } from './Vista/personajes/personajes-page-component';


export const routes: Routes = [
  { 
    path: '', // or specify a valid path string
    component: CounterPageComponent,
  }, 
  {
    path: 'hero', // or specify a valid path string
    component: HeroPageComponent,
  },
  {
    path: 'Vista', // or specify a valid path string
    component: VistaPageComponent,
  },
  {
    path: 'enemigos', // or specify a valid path string
    component: EnemigosPageComponent,
  },
  {
    path: 'jefes', // or specify a valid path string
    component: JefesPageComponent,
  },
  {
    path: 'mapa', // or specify a valid path string
    component: MapaPageComponent,
  },
  {
    path: 'amuletos', // or specify a valid path string
    component: AmuletosPageComponent,
  },
  {
    path: 'habilidades', // or specify a valid path string
    component: HabilidadesPageComponent,
  },
  {
    path: 'personajes', // or specify a valid path string
    component: PersonajesPageComponent,
  },
  {
    path: 'Pokemon', // or specify a valid path string
    component: PokemonPageComponent,
  },
  {path: '**', redirectTo: 'Vista',}
  ,
];