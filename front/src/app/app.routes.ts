import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Classes } from './pages/classes/classes';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: Home },
      { path: 'classes', component: Classes },
      // otras páginas de cliente
    ]
  },
//   {
//     path: 'admin',
//     component: AdminLayoutComponent,
//     children: [
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//       { path: 'dashboard', component: DashboardComponent },
//       // otras páginas del admin
//     ]
//   }
];

