import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'Counter',
    loadComponent: () => import('./page/counter/page-component').then(m => m.CounterPageComponent),
  }, 
  {
    path: 'hero',
    loadComponent: () => import('./page/hero/hero-page-component').then(m => m.HeroPageComponent),
  },
  {
    path: 'Vista',
    loadComponent: () => import('./Vista/vista-page-component').then(m => m.VistaPageComponent),
  },
  {
    path: 'enemigos',
    loadComponent: () => import('./Vista/enemigos/enemigos-page-component').then(m => m.EnemigosPageComponent),
  },
  {
    path: 'jefes',
    loadComponent: () => import('./Vista/jefes/jefes-page-component').then(m => m.JefesPageComponent),
  },
  {
    path: 'mapa',
    loadComponent: () => import('./Vista/mapa/mapa-page-component').then(m => m.MapaPageComponent),
  },
  {
    path: 'amuletos',
    loadComponent: () => import('./Vista/amuletos/amuletos-page-component').then(m => m.AmuletosPageComponent),
  },
  {
    path: 'habilidades',
    loadComponent: () => import('./Vista/habilidades/habilidades-page-component').then(m => m.HabilidadesPageComponent),
  },
  {
    path: 'personajes',
    loadComponent: () => import('./Vista/personajes/personajes-page-component').then(m => m.PersonajesPageComponent),
  },
  {
    path: 'Pokemon',
    loadComponent: () => import('./page/Pokemon/pokemon-page-component').then(m => m.PokemonPageComponent),
  },
  {path: '**', redirectTo: 'Vista',}
];