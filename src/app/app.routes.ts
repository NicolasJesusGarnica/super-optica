import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio'; 

import { SolarSafeComponent } from './solar-safe/solar-safe';

import { TransitionsComponent } from './pages/transitions/transitions';

import { BlueStopComponent } from './pages/blue-stop/blue-stop';

import { AgeProtectionComponent } from './pages/age-protection/age-protection';

import { EvolutionsComponent} from './evolutions/evolutions';

import { Materiales} from './materiales/materiales';

import { Hd } from './hd/hd';

export const routes: Routes = [
  { path: '', component: Inicio }, 
  { path: 'descubre', component: SolarSafeComponent },
  { path: 'transitions', component: TransitionsComponent },
  { path: 'blue-stop', component: BlueStopComponent },
  { path: 'age-protection', component: AgeProtectionComponent },
  { path: 'evolutions', component: EvolutionsComponent },
  { path: 'materiales', component: Materiales },
  { path: 'hd', component: Hd },
];