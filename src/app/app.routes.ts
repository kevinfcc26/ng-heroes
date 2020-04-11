// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AbautComponent } from "./components/abaut/abaut.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscarComponent } from "./components/buscar/buscar.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "abaut", component: AbautComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "buscar/:termino", component: BuscarComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
