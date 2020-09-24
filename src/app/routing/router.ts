import { Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';


const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
export default appRoutes;
